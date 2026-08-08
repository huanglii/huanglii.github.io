export default function ContributionGraph() {
  return (
    <>
      <h2 className="section-title">
        <span className="section-num">05.</span>
        Contribution Graph <span className="lang-sub">/ 贡献热力图</span>
      </h2>
      <div className="heatmap-container">
        <img
          src="https://ghchart.rshah.org/huanglii"
          alt="GitHub Contribution Graph"
          onError={(e) => {
            (e.currentTarget.parentElement as HTMLElement).style.display = "none";
          }}
        />
        <div className="heatmap-legend">
          Less
          <span className="heatmap-cell" style={{ background: "#ebedf0" }}></span>
          <span className="heatmap-cell" style={{ background: "#9be9a8" }}></span>
          <span className="heatmap-cell" style={{ background: "#40c463" }}></span>
          <span className="heatmap-cell" style={{ background: "#30a14e" }}></span>
          <span className="heatmap-cell" style={{ background: "#216e39" }}></span>
          More
        </div>
      </div>
    </>
  );
}
