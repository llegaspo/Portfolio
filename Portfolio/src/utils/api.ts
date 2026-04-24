const previewText = (value: string) => {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length > 120 ? `${normalized.slice(0, 120)}...` : normalized;
};

export async function fetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(input, init);
  const contentType = response.headers.get("content-type") ?? "";
  const body = await response.text();

  if (!response.ok) {
    if (contentType.includes("application/json") && body) {
      const payload = JSON.parse(body) as { error?: string };
      throw new Error(payload.error || `Request failed with status ${response.status}`);
    }

    throw new Error(
      `Request failed with status ${response.status}: ${previewText(body || response.statusText)}`,
    );
  }

  if (!contentType.includes("application/json")) {
    throw new Error(
      `Expected JSON but received ${contentType || "an unknown content type"}: ${previewText(body)}`,
    );
  }

  if (!body) {
    throw new Error("API returned an empty response.");
  }

  try {
    return JSON.parse(body) as T;
  } catch {
    throw new Error(`Invalid JSON response: ${previewText(body)}`);
  }
}
