import { useEffect, useState } from "react";
import PageHeader from "../components/layout/pageHeader";
import { getThemeColor } from "../utils/helper";
import { fetchJson } from "../utils/api";
import type { Repository } from "../components/github/repoCard";
import RepoCard from "../components/github/repoCard";

type Calendar = {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionCount: number;
      date: string;
      color: string;
    }[];
  }[];
};

type UserProfile = {
  name: string;
  login: string;
  avatarUrl: string;
  bio: string;
  url: string;
  followers: { totalCount: number };
  following: { totalCount: number };
};

export default function Github() {
  const [calendar, setCalendar] = useState<Calendar | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [sourceRepos, setSourceRepos] = useState<Repository[]>([]);
  const [forkedRepos, setForkedRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "llegaspo";

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const data = await fetchJson<{
          error?: string;
          errors?: unknown[];
          data?: {
            user: {
              name: string;
              login: string;
              avatarUrl: string;
              bio: string;
              url: string;
              followers: { totalCount: number };
              following: { totalCount: number };
              sourceRepos: { nodes: Repository[] };
              forkRepos: { nodes: Repository[] };
              contributionsCollection: {
                contributionCalendar: Calendar;
              };
            };
          };
        }>(`/api/github?username=${username}`);

        if (data.error) {
          throw new Error(data.error);
        }

        if (data.errors) {
          console.error("Query Error:", data.errors);
          setError("GitHub API Error. Check console for details.");
          setLoading(false);
          return;
        }

        if (!data.data?.user) {
          throw new Error("GitHub API returned an unexpected response.");
        }

        const userData = data.data.user;
        setProfile({
          name: userData.name,
          login: userData.login,
          avatarUrl: userData.avatarUrl,
          bio: userData.bio,
          url: userData.url,
          followers: userData.followers,
          following: userData.following,
        });
        setSourceRepos(userData.sourceRepos.nodes);
        setForkedRepos(userData.forkRepos.nodes);
        setCalendar(userData.contributionsCollection.contributionCalendar);
        setLoading(false);
      } catch (e: unknown) {
        console.error("error", e);
        setError(e instanceof Error ? e.message : "Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading)
    return (
      <>
        <PageHeader />
        <main className="mx-auto max-w-3xl px-6 pt-16">
          <p className="font-mono text-sm text-slate-500">loading…</p>
        </main>
      </>
    );

  if (error || !calendar || !profile)
    return (
      <>
        <PageHeader />
        <main className="mx-auto max-w-3xl px-6 pt-16">
          <h1 className="text-4xl font-bold lowercase text-white">github</h1>
          <p className="mt-4 text-slate-400">
            Couldn&rsquo;t load the GitHub data right now.
          </p>
          <p className="mt-2 font-mono text-xs text-slate-600">
            {error || "Unknown error."}
          </p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-md border border-white/12 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
          >
            View profile on GitHub
          </a>
        </main>
      </>
    );

  return (
    <>
      <PageHeader />

      <main className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <div className="flex items-start gap-5">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="h-16 w-16 rounded-full border border-white/10"
          />
          <div className="min-w-0">
            <h1 className="text-2xl font-bold lowercase text-white">
              {profile.name}
            </h1>
            <a
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-accent-300 transition-colors hover:text-white"
            >
              @{profile.login}
            </a>
            {profile.bio && (
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {profile.bio}
              </p>
            )}
            <p className="mt-2 font-mono text-xs text-slate-600">
              {profile.followers.totalCount} followers ·{" "}
              {profile.following.totalCount} following
            </p>
          </div>
        </div>

        <section className="mt-14">
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-semibold lowercase text-white">
              contributions
            </h2>
            <span className="font-mono text-xs text-slate-600">
              {calendar.totalContributions} in the last year
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px]">
              {calendar.weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day, j) => (
                    <div
                      key={j}
                      className="h-2.5 w-2.5 rounded-[2px]"
                      style={{
                        backgroundColor: getThemeColor(day.contributionCount),
                      }}
                      title={`${day.date}: ${day.contributionCount} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-semibold lowercase text-white">
              repositories
            </h2>
            <span className="font-mono text-xs text-slate-600">
              {sourceRepos.length}
            </span>
          </div>

          {sourceRepos.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {sourceRepos.map((repo, idx) => (
                <RepoCard key={repo.name} repo={repo} index={idx} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              No public source repositories found.
            </p>
          )}
        </section>

        {forkedRepos.length > 0 && (
          <section className="mt-14">
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-semibold lowercase text-white">
                forks
              </h2>
              <span className="font-mono text-xs text-slate-600">
                {forkedRepos.length}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {forkedRepos.map((repo, idx) => (
                <RepoCard key={repo.name} repo={repo} index={idx} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
