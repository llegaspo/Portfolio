export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;

  const { username = "llegaspo" } = req.query;

  if (!token) {
    return res.status(500).json({ error: "Missing GITHUB_TOKEN in Vercel settings" });
  }

  const query = `
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
    }
  `;

  try {
    const ghResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await ghResponse.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
