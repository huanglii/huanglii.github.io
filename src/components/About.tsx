export default function About() {
  return (
    <>
      <h2 className="section-title">
        <span className="section-num">01.</span>
        About Me <span className="lang-sub">/ 关于我</span>
      </h2>
      <div className="bilingual">
        <p className="lang-en">
          I'm a full-stack developer passionate about <strong>geospatial visualization</strong> and{" "}
          <strong>WebGL technologies</strong>. I build open-source tools that make map rendering,
          spatial data processing, and GIS visualization more accessible on the web.
        </p>
        <p className="lang-cn">
          我是一名全栈开发者，热衷于
          <strong>地理空间可视化</strong>和 <strong>WebGL 技术</strong>
          。我开发开源工具，让地图渲染、空间数据处理和 GIS 可视化在 Web 上更加触手可及。
        </p>
      </div>
    </>
  );
}
