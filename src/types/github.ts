export interface GitHubProfile {
  public_repos: number;
  followers: number;
}

export interface GitHubRepo {
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  languages_url: string;
}

export interface GitHubEvent {
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    commits?: unknown[];
    ref_type?: string;
  };
}

export interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  events: GitHubEvent[];
  langStats: Record<string, number>;
}
