import { projects } from "../data/projects";
import type { GitHubRepo } from "../types/github";

interface ProjectsProps {
  repoMap: Record<string, GitHubRepo>;
}

export default function Projects({ repoMap }: ProjectsProps) {
  return (
    <>
      <h2 className="section-title">
        <span className="section-num">03.</span>
        Projects <span className="lang-sub">/ 开源项目</span>
      </h2>
      <div className="project-grid">
        {projects.map((project) => {
          const repo = repoMap[project.repo.toLowerCase()];
          const stars = repo?.stargazers_count ?? null;
          const forks = repo?.forks_count ?? null;

          return (
            <div className="project-card" key={project.repo}>
              <div className="project-icon">{project.icon}</div>
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p className="project-desc">
                {project.desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
              {project.subItems && (
                <ul className="project-sub">
                  {project.subItems.map((sub) => (
                    <li key={sub.label}>
                      🔸{" "}
                      <a href={sub.href} target="_blank" rel="noopener noreferrer">
                        {sub.label}
                      </a>{" "}
                      - {sub.desc}
                    </li>
                  ))}
                </ul>
              )}
              <div className="project-meta">
                {project.badges.map((badge) => (
                  <span className="project-badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
              {stars !== null && (
                <div className="project-github-stats" style={{ display: "flex" }}>
                  <span className="project-badge">
                    <i className="fa-solid fa-star"></i> {stars}
                  </span>
                  <span className="project-badge">
                    <i className="fa-solid fa-code-fork"></i> {forks}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
