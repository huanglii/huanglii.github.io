import { useState, useEffect } from "react";
import type { GitHubData, GitHubProfile, GitHubRepo, GitHubEvent } from "../types/github";

const CACHE_KEY = "github_data_cache";
const CACHE_TTL = 6 * 3600000; // 6 hours
const ACCOUNTS = ["huanglii", "naivemap"];
const PRIMARY_USER = "huanglii";

const FALLBACK_LANGS = ["JavaScript", "TypeScript", "HTML", "CSS", "Python"];

function fetchJSON(url: string): Promise<any> {
  return fetch(url).then((r) => {
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  });
}

function formatTime(dateStr: string): string {
  const d = new Date(dateStr);
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return Math.floor(diff / 60) + "m ago";
  if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
  if (diff < 604800) return Math.floor(diff / 86400) + "d ago";
  return d.toLocaleDateString();
}

export interface ActivityItem {
  icon: string;
  action: string;
  repo: string;
  time: string;
}

export function useGitHubData() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [repoMap, setRepoMap] = useState<Record<string, GitHubRepo>>({});
  const [langStats, setLangStats] = useState<Record<string, number>>({});
  const [stats, setStats] = useState({ repos: 0, stars: 0, followers: 0, langs: 0 });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Check cache
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
        if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
          processData(cached as GitHubData);
          return;
        }
      } catch {
        // ignore
      }

      try {
        const profile: GitHubProfile = await fetchJSON(
          `https://api.github.com/users/${PRIMARY_USER}`,
        );

        const repoArrays: GitHubRepo[][] = await Promise.all(
          ACCOUNTS.map((acc) =>
            fetchJSON(`https://api.github.com/users/${acc}/repos?per_page=100&type=public`)
              .then((repos: GitHubRepo[]) => repos.filter((r) => !r.fork))
              .catch(() => []),
          ),
        );
        const flat: GitHubRepo[] = repoArrays.flat();

        const events: GitHubEvent[] = await fetchJSON(
          `https://api.github.com/users/${PRIMARY_USER}/events/public?per_page=30`,
        ).catch(() => []);

        // Fetch language data in batches
        const langStats: Record<string, number> = {};
        for (let i = 0; i < flat.length; i += 8) {
          const slice = flat.slice(i, i + 8);
          const langResults = await Promise.all(
            slice.map((repo) => fetchJSON(repo.languages_url).catch(() => ({}))),
          );
          langResults.forEach((langs) => {
            Object.keys(langs).forEach((lang) => {
              langStats[lang] = (langStats[lang] || 0) + langs[lang];
            });
          });
        }

        const ghData: GitHubData = { profile, repos: flat, events, langStats };
        if (!cancelled) {
          processData(ghData);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), ...ghData }));
          } catch {
            // ignore
          }
        }
      } catch {
        if (!cancelled) {
          // Fallback
          setLangStats(FALLBACK_LANGS.reduce((acc, l) => ({ ...acc, [l]: 1 }), {}));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    function processData(d: GitHubData) {
      // Lang stats
      setLangStats(d.langStats);

      // Repo map for project stats
      const map: Record<string, GitHubRepo> = {};
      d.repos.forEach((r) => {
        map[r.full_name.toLowerCase()] = r;
      });
      setRepoMap(map);

      // Stats
      const totalStars = d.repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
      setStats({
        repos: d.profile.public_repos || d.repos.length,
        stars: totalStars,
        followers: d.profile.followers || 0,
        langs: Object.keys(d.langStats).length,
      });

      // Activities
      const filtered = d.events
        .filter((e) =>
          [
            "PushEvent",
            "CreateEvent",
            "ReleaseEvent",
            "WatchEvent",
            "ForkEvent",
            "PublicEvent",
          ].includes(e.type),
        )
        .slice(0, 6);

      const items: ActivityItem[] = filtered.map((e) => {
        let icon = "fa-code-commit";
        let action = "";
        switch (e.type) {
          case "PushEvent":
            icon = "fa-code-commit";
            {
              const n = e.payload?.commits?.length || 1;
              action = `pushed ${n} commit${n > 1 ? "s" : ""} to`;
            }
            break;
          case "CreateEvent":
            icon = "fa-plus";
            action = `created ${e.payload?.ref_type || "repo"}`;
            break;
          case "ReleaseEvent":
            icon = "fa-tag";
            action = "released";
            break;
          case "WatchEvent":
            icon = "fa-star";
            action = "starred";
            break;
          case "ForkEvent":
            icon = "fa-code-fork";
            action = "forked";
            break;
          case "PublicEvent":
            icon = "fa-eye";
            action = "made public";
            break;
        }
        return {
          icon,
          action,
          repo: e.repo?.name || "",
          time: formatTime(e.created_at),
        };
      });
      setActivities(items);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { loading, langStats, repoMap, stats, activities };
}
