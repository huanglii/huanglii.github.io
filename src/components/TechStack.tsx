const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Python: "#3572A5",
  Shell: "#89e051",
  Vue: "#41b883",
  GLSL: "#5686a5",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Dockerfile: "#384d54",
  Makefile: "#427819",
  Markdown: "#083fa1",
  JSON: "#292929",
  Less: "#1d365d",
  Stylus: "#ff6347",
  Roff: "#ecdebe",
  Batchfile: "#C1F12E",
  Astro: "#ff5a03",
  Svelte: "#ff3e00",
};

interface TechStackProps {
  loading: boolean;
  langStats: Record<string, number>;
}

export default function TechStack({ loading, langStats }: TechStackProps) {
  const entries = Object.entries(langStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

  if (loading && entries.length === 0) {
    return (
      <>
        <h2 className="section-title">
          <span className="section-num">02.</span>
          Tech Stack <span className="lang-sub">/ 技术栈</span>
        </h2>
        <div className="tech-tags">
          <span className="tech-tag" style={{ opacity: 0.5 }}>
            <i className="fa-solid fa-circle-notch fa-spin"></i> Loading from GitHub...
          </span>
        </div>
      </>
    );
  }

  const maxBytes = entries[0]?.[1] || 1;

  return (
    <>
      <h2 className="section-title">
        <span className="section-num">02.</span>
        Tech Stack <span className="lang-sub">/ 技术栈</span>
      </h2>
      <div className="tech-tags">
        {entries.map(([lang, bytes]) => {
          const color = LANG_COLORS[lang] || "#7aa2f7";
          return (
            <span
              key={lang}
              className="tech-tag"
              style={{
                color,
                borderColor: color + "55",
                opacity: 0.55 + 0.45 * (bytes / maxBytes),
              }}
            >
              {lang}
            </span>
          );
        })}
      </div>
    </>
  );
}
