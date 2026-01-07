import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getThemeColor } from "../utils/helper";
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

  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const username = "llegaspo";

  useEffect(() => {
    const fetchGithubData = async () => {
      if (!token) {
        setError("Missing VITE_GITHUB_TOKEN in .env file.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            query {
              user(login: "${username}") {
                name
                login
                avatarUrl
                bio
                url
                followers { totalCount }
                following { totalCount }

                # LIST 1: SOURCE REPOS
                sourceRepos: repositories(first: 30, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
                  nodes {
                    name
                    description
                    url
                    stargazerCount
                    forkCount
                    updatedAt
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }

                # LIST 2: FORKED REPOS
                forkRepos: repositories(first: 30, ownerAffiliations: OWNER, isFork: true, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
                  nodes {
                    name
                    description
                    url
                    stargazerCount
                    forkCount
                    updatedAt
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }

                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                        color
                      }
                    }
                  }
                }
              }
            }`,
          }),
        });

        const data = await response.json();

        if (data.errors) {
          console.error("Query Error:", data.errors);
          setError("GitHub API Error. Check console for details.");
          setLoading(false);
          return;
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
      } catch (e) {
        console.error("error", e);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [token]);

  if (loading)
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-violet-400 font-mono gap-4 relative overflow-hidden">
        {/* Loading Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin z-10" />
        <p className="z-10">Initializing Uplink to GitHub...</p>
      </div>
    );

  if (error || !calendar || !profile)
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-xl max-w-md text-center backdrop-blur-md">
          <h2 className="text-red-400 text-xl font-bold mb-2">
            Connection Failed
          </h2>
          <p className="text-gray-400">{error || "Unknown error occurred."}</p>
          <Link
            to="/"
            className="inline-block mt-6 text-sm text-gray-500 hover:text-white underline"
          >
            Return Home
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-violet-500/30 font-inter p-6 lg:p-12 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-800/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-800/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Return to Base
        </Link>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-8 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-36 h-36 mb-6 group">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-fuchsia-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="relative w-full h-full rounded-full border-4 border-[#050505] object-cover"
                  />
                </div>

                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
                  {profile.name}
                </h1>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-400 font-mono text-sm hover:text-violet-300 transition-colors mb-4 block"
                >
                  @{profile.login}
                </a>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {profile.bio}
                </p>

                <div className="flex gap-4 text-sm mb-8 w-full justify-center">
                  <div className="flex flex-col items-center px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-white text-xl">
                      {profile.followers.totalCount}
                    </span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                      Followers
                    </span>
                  </div>
                  <div className="flex flex-col items-center px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-white text-xl">
                      {profile.following.totalCount}
                    </span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                      Following
                    </span>
                  </div>
                </div>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-200 hover:scale-[1.02] transition-all text-center block shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  View GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/40 border border-white/5 rounded-2xl p-6 overflow-hidden backdrop-blur-md"
            >
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-200">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                  </span>
                  Contribution Graph
                </h2>
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                  {calendar.totalContributions} commits / 1yr
                </span>
              </div>

              <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-violet-900 scrollbar-track-transparent">
                <div className="flex gap-[3px]">
                  {calendar.weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-[3px]">
                      {week.contributionDays.map((day, j) => (
                        <div
                          key={j}
                          className="w-3 h-3 rounded-[2px] transition-all duration-300 hover:scale-125 hover:z-10 relative"
                          style={{
                            backgroundColor: getThemeColor(
                              day.contributionCount,
                            ),
                            boxShadow:
                              day.contributionCount > 0
                                ? `0 0 6px ${getThemeColor(day.contributionCount)}60`
                                : "none",
                          }}
                          title={`${day.date}: ${day.contributionCount} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              <div className="flex items-baseline gap-4 mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  Source Code
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                <span className="text-gray-500 text-sm font-mono">
                  {sourceRepos.length} Repos
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {sourceRepos.length > 0 ? (
                  sourceRepos.map((repo, idx) => (
                    <RepoCard key={repo.name} repo={repo} index={idx} />
                  ))
                ) : (
                  <div className="col-span-full text-gray-500 italic p-8 border border-white/5 bg-white/5 rounded-xl text-center">
                    No public source repositories found.
                  </div>
                )}
              </div>
            </div>

            {forkedRepos.length > 0 && (
              <div>
                <div className="flex items-baseline gap-4 mb-6 pt-4">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                    Forked Projects
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <span className="text-gray-500 text-sm font-mono">
                    {forkedRepos.length} Repos
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {forkedRepos.map((repo, idx) => (
                    <RepoCard key={repo.name} repo={repo} index={idx} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
