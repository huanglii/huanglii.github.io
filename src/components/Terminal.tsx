export default function Terminal() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <span className="terminal-title">huanglii@naivemap: ~</span>
      </div>
      <div className="terminal-body">
        <p>
          <span className="tm-prompt">$</span> <span className="tm-cmd">whoami</span>
        </p>
        <p className="tm-out">
          {"> "}
          <span className="tm-key">huanglii</span> / <span className="tm-key">NaiveMap</span>
        </p>
        <p className="tm-com"># Full-stack GIS Visualization Developer</p>
        <p className="tm-com"># 专注于地理空间可视化与 WebGL 技术的全栈开发者</p>
        <br />
        <p>
          <span className="tm-prompt">$</span> <span className="tm-cmd">cat profile.json</span>
        </p>
        <p className="tm-out">{"{"}</p>
        <p className="tm-out">
          &nbsp;&nbsp;<span className="tm-key">"role"</span>:{" "}
          <span className="tm-str">"GIS Visualization Full-stack Developer"</span>,
        </p>
        <p className="tm-out">
          &nbsp;&nbsp;<span className="tm-key">"focus"</span>:[
          <span className="tm-str">"WebGIS"</span>, <span className="tm-str">"Mapbox GL JS"</span>,{" "}
          <span className="tm-str">"WebGL"</span>,{" "}
          <span className="tm-str">"Data Visualization"</span>],
        </p>
        <p className="tm-out">
          &nbsp;&nbsp;<span className="tm-key">"opensource"</span>:{" "}
          <span className="tm-str">"https://github.com/naivemap"</span>,
        </p>
        <p className="tm-out">
          &nbsp;&nbsp;<span className="tm-key">"website"</span>:{" "}
          <span className="tm-str">"https://www.naivemap.com"</span>
        </p>
        <p className="tm-out">{"}"}</p>
        <br />
        <p>
          <span className="tm-prompt">$</span> <span className="tm-cmd">ls projects/ --count</span>
        </p>
        <p className="tm-out">
          {"> 7 open-source projects found "}
          <span className="tm-blink"></span>
        </p>
      </div>
    </div>
  );
}
