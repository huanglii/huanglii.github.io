interface StatsProps {
  stats: { repos: number; stars: number; followers: number; langs: number };
}

export default function Stats({ stats }: StatsProps) {
  const items = [
    { value: stats.repos, label: "Public Repos\n公开仓库" },
    { value: stats.stars, label: "Total Stars\n总 Star 数" },
    { value: stats.followers, label: "Followers\n关注者" },
    { value: stats.langs, label: "Languages\n编程语言" },
  ];

  return (
    <div className="stats-row">
      {items.map((item) => (
        <div className="stat-item" key={item.label}>
          <div className="stat-num">{item.value || "-"}</div>
          <div className="stat-label">
            {item.label.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
