import type { IncomingMessage, ServerResponse } from "node:http";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

type ApiRequest = IncomingMessage & {
  query: Record<string, string>;
};

type ApiResponse = ServerResponse<IncomingMessage> & {
  status: (code: number) => ApiResponse;
  json: (payload: unknown) => ApiResponse;
};

type ApiHandler = (req: ApiRequest, res: ApiResponse) => Promise<unknown>;

const apiRoutes = {
  "/api/competitions": "./api/competitions.js",
  "/api/github": "./api/github.js",
  "/api/projects": "./api/projects.js",
} as const;

function localApiPlugin() {
  return {
    name: "local-api-plugin",
    apply: "serve" as const,
    configureServer(server: {
      middlewares: {
        use: (
          handler: (
            req: IncomingMessage,
            res: ServerResponse<IncomingMessage>,
            next: () => void,
          ) => Promise<void>,
        ) => void;
      };
    }) {
      server.middlewares.use(async (req, res, next) => {
        const requestUrl = req.url ? new URL(req.url, "http://localhost") : null;

        if (!requestUrl) {
          next();
          return;
        }

        const modulePath = apiRoutes[requestUrl.pathname as keyof typeof apiRoutes];

        if (!modulePath) {
          next();
          return;
        }

        try {
          const moduleUrl = new URL(modulePath, import.meta.url).href;
          const handler = (await import(moduleUrl)).default as ApiHandler;
          const apiReq = Object.assign(req, {
            query: Object.fromEntries(requestUrl.searchParams.entries()),
          }) as ApiRequest;
          const apiRes = res as ApiResponse;

          apiRes.status = (code: number) => {
            apiRes.statusCode = code;
            return apiRes;
          };

          apiRes.json = (payload: unknown) => {
            if (!apiRes.headersSent) {
              apiRes.setHeader("Content-Type", "application/json; charset=utf-8");
            }
            apiRes.end(JSON.stringify(payload));
            return apiRes;
          };

          await handler(apiReq, apiRes);

          if (!apiRes.writableEnded) {
            apiRes.end();
          }
        } catch (error) {
          console.error("Local API handler failed:", error);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json; charset=utf-8");
          }
          if (!res.writableEnded) {
            res.end(JSON.stringify({ error: "Local API handler failed" }));
          }
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    plugins: [tailwindcss(), react(), localApiPlugin()],
  };
});
