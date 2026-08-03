---
layout: default
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">

<!-- ==================== 终端风格 Hero ==================== -->
<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-dot red"></span>
    <span class="terminal-dot yellow"></span>
    <span class="terminal-dot green"></span>
    <span class="terminal-title">huanglii@naivemap: ~</span>
  </div>
  <div class="terminal-body">
    <p><span class="tm-prompt">$</span> <span class="tm-cmd">whoami</span></p>
    <p class="tm-out">> <span class="tm-key">huanglii</span> / <span class="tm-key">NaiveMap</span></p>
    <p class="tm-com"># Full-stack GIS Visualization Developer</p>
    <p class="tm-com"># 专注于地理空间可视化与 WebGL 技术的全栈开发者</p>
    <br>
    <p><span class="tm-prompt">$</span> <span class="tm-cmd">cat profile.json</span></p>
    <p class="tm-out">{</p>
    <p class="tm-out">&nbsp;&nbsp;<span class="tm-key">"role"</span>: <span class="tm-str">"GIS Visualization Full-stack Developer"</span>,</p>
    <p class="tm-out">&nbsp;&nbsp;<span class="tm-key">"focus"</span>: [<span class="tm-str">"WebGIS"</span>, <span class="tm-str">"Mapbox GL JS"</span>, <span class="tm-str">"WebGL"</span>, <span class="tm-str">"Data Visualization"</span>],</p>
    <p class="tm-out">&nbsp;&nbsp;<span class="tm-key">"opensource"</span>: <span class="tm-str">"https://github.com/naivemap"</span>,</p>
    <p class="tm-out">&nbsp;&nbsp;<span class="tm-key">"website"</span>: <span class="tm-str">"https://www.naivemap.com"</span></p>
    <p class="tm-out">}</p>
    <br>
    <p><span class="tm-prompt">$</span> <span class="tm-cmd">ls projects/ --count</span></p>
    <p class="tm-out">> 7 open-source projects found <span class="tm-blink"></span></p>
  </div>
</div>

<!-- ==================== 关于我 ==================== -->
<h2 class="section-title">
  <span class="section-num">01.</span>
  About Me <span class="lang-sub">/ 关于我</span>
</h2>

<div class="bilingual">
  <p class="lang-en">I'm a full-stack developer passionate about <strong>geospatial visualization</strong> and <strong>WebGL technologies</strong>. I build open-source tools that make map rendering, spatial data processing, and GIS visualization more accessible on the web.</p>
  <p class="lang-cn">我是一名全栈开发者，热衷于<strong>地理空间可视化</strong>和 <strong>WebGL 技术</strong>。我开发开源工具，让地图渲染、空间数据处理和 GIS 可视化在 Web 上更加触手可及。</p>
</div>

<!-- ==================== 技术栈 ==================== -->
<h2 class="section-title">
  <span class="section-num">02.</span>
  Tech Stack <span class="lang-sub">/ 技术栈</span>
</h2>

<div class="tech-tags" id="tech-tags">
  <span class="tech-tag" style="opacity:0.5">
    <i class="fa-solid fa-circle-notch fa-spin"></i> Loading from GitHub...
  </span>
</div>

<!-- ==================== 统计 ==================== -->
<div class="stats-row" id="stats-row">
  <div class="stat-item">
    <div class="stat-num" id="stat-repos">-</div>
    <div class="stat-label">Public Repos<br>公开仓库</div>
  </div>
  <div class="stat-item">
    <div class="stat-num" id="stat-stars">-</div>
    <div class="stat-label">Total Stars<br>总 Star 数</div>
  </div>
  <div class="stat-item">
    <div class="stat-num" id="stat-followers">-</div>
    <div class="stat-label">Followers<br>关注者</div>
  </div>
  <div class="stat-item">
    <div class="stat-num" id="stat-langs">-</div>
    <div class="stat-label">Languages<br>编程语言</div>
  </div>
</div>

<!-- ==================== 项目 ==================== -->
<h2 class="section-title">
  <span class="section-num">03.</span>
  Projects <span class="lang-sub">/ 开源项目</span>
</h2>

<div class="project-grid">

  <!-- Mapbox GL JS Cookbook -->
  <div class="project-card" data-repo="huanglii/mapbox-gl-js-cookbook">
    <div class="project-icon">📚</div>
    <h3><a href="https://huanglii.github.io/mapbox-gl-js-cookbook/">Mapbox GL JS Cookbook</a></h3>
    <p class="project-desc">A collection of practical recipes and examples for Mapbox GL JS development.<br>Mapbox GL JS 实战指南与示例集合。</p>
    <div class="project-meta">
      <span class="project-badge">📖 Docs</span>
      <span class="project-badge">🌍 Demo</span>
    </div>
    <div class="project-github-stats">
      <span class="project-badge"><i class="fa-solid fa-star"></i> <span class="star-count">-</span></span>
      <span class="project-badge"><i class="fa-solid fa-code-fork"></i> <span class="fork-count">-</span></span>
    </div>
  </div>

  <!-- WebGIS Starter -->
  <div class="project-card" data-repo="naivemap/webgis-starter">
    <div class="project-icon">📘</div>
    <h3><a href="https://www.naivemap.com/webgis-starter/">WebGIS Starter</a></h3>
    <p class="project-desc">A comprehensive open-source book for getting started with WebGIS.<br>一本较为全面的 WebGIS 开源入门书籍。</p>
    <div class="project-meta">
      <span class="project-badge">📖 Book</span>
      <span class="project-badge">open-source</span>
    </div>
    <div class="project-github-stats">
      <span class="project-badge"><i class="fa-solid fa-star"></i> <span class="star-count">-</span></span>
      <span class="project-badge"><i class="fa-solid fa-code-fork"></i> <span class="fork-count">-</span></span>
    </div>
  </div>

  <!-- Mapbox GL Layers -->
  <div class="project-card" data-repo="naivemap/mapbox-gl-layers">
    <div class="project-icon">🧩</div>
    <h3><a href="https://github.com/naivemap/mapbox-gl-layers">Mapbox GL Layers</a></h3>
    <p class="project-desc">Implementations of Mapbox's custom layer API.<br>Mapbox 自定义图层 API 的系列实现。</p>
    <ul class="project-sub">
      <li>🔸 <a href="https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-echarts-layer/README.md">EChartsLayer</a> - Apache ECharts lines & scatter integration</li>
      <li>🔸 <a href="https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-image-layer/README.md">ImageLayer</a> - Static image loading with reprojection (Arrugator + Proj4js)</li>
      <li>🔸 <a href="https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-grid-layer/README.md">GridLayer</a> - Colorful grid data rendering</li>
    </ul>
    <div class="project-meta">
      <span class="project-badge">📦 Monorepo</span>
      <span class="project-badge">3 packages</span>
    </div>
    <div class="project-github-stats">
      <span class="project-badge"><i class="fa-solid fa-star"></i> <span class="star-count">-</span></span>
      <span class="project-badge"><i class="fa-solid fa-code-fork"></i> <span class="fork-count">-</span></span>
    </div>
  </div>

  <!-- NaiveMap -->
  <div class="project-card" data-repo="naivemap/mapbox-gl-naive-map">
    <div class="project-icon">🗺️</div>
    <h3><a href="https://github.com/naivemap/mapbox-gl-naive-map">NaiveMap</a></h3>
    <p class="project-desc">Extended Map class built on top of <code>mapboxgl.Map</code> with extra utilities.<br>基于 <code>mapboxgl.Map</code> 的扩展地图封装。</p>
    <div class="project-meta">
      <span class="project-badge">🔧 Library</span>
      <span class="project-badge">TypeScript</span>
    </div>
    <div class="project-github-stats">
      <span class="project-badge"><i class="fa-solid fa-star"></i> <span class="star-count">-</span></span>
      <span class="project-badge"><i class="fa-solid fa-code-fork"></i> <span class="fork-count">-</span></span>
    </div>
  </div>

  <!-- PolygonMorpher -->
  <div class="project-card" data-repo="naivemap/mapbox-gl-polygon-morpher">
    <div class="project-icon">🔄</div>
    <h3><a href="https://github.com/naivemap/mapbox-gl-polygon-morpher">PolygonMorpher</a></h3>
    <p class="project-desc">Morph smoothly between Polygons or MultiPolygons on Mapbox GL maps.<br>在 Mapbox GL 地图上实现多边形的平滑形变过渡。</p>
    <div class="project-meta">
      <span class="project-badge">✨ Animation</span>
      <span class="project-badge">WebGL</span>
    </div>
    <div class="project-github-stats">
      <span class="project-badge"><i class="fa-solid fa-star"></i> <span class="star-count">-</span></span>
      <span class="project-badge"><i class="fa-solid fa-code-fork"></i> <span class="fork-count">-</span></span>
    </div>
  </div>

  <!-- Location Picker -->
  <div class="project-card" data-repo="naivemap/location-picker">
    <div class="project-icon">📍</div>
    <h3><a href="https://www.naivemap.com/location-picker">Location Picker</a></h3>
    <p class="project-desc">An interactive location picker tool built for web maps.<br>一个用于网页地图的交互式位置选取工具。</p>
    <div class="project-meta">
      <span class="project-badge">🛠️ Tool</span>
      <span class="project-badge">🌍 Online</span>
    </div>
    <div class="project-github-stats">
      <span class="project-badge"><i class="fa-solid fa-star"></i> <span class="star-count">-</span></span>
      <span class="project-badge"><i class="fa-solid fa-code-fork"></i> <span class="fork-count">-</span></span>
    </div>
  </div>

  <!-- Administrative Division Downloader -->
  <div class="project-card" data-repo="huanglii/admin-cn-downloader">
    <div class="project-icon">⬇️</div>
    <h3><a href="https://huanglii.github.io/admin-cn-downloader/">Admin Division Downloader</a></h3>
    <p class="project-desc">Download Chinese administrative division boundary data.<br>中国行政区划边界数据下载工具。</p>
    <div class="project-meta">
      <span class="project-badge">🇨🇳 China</span>
      <span class="project-badge">🌍 Online</span>
    </div>
    <div class="project-github-stats">
      <span class="project-badge"><i class="fa-solid fa-star"></i> <span class="star-count">-</span></span>
      <span class="project-badge"><i class="fa-solid fa-code-fork"></i> <span class="fork-count">-</span></span>
    </div>
  </div>

</div>

<!-- ==================== 最近活动 ==================== -->
<h2 class="section-title">
  <span class="section-num">04.</span>
  Recent Activity <span class="lang-sub">/ 最近活动</span>
</h2>

<div class="activity-list" id="activity-list">
  <div class="activity-item" style="opacity:0.5">
    <div class="activity-icon"><i class="fa-solid fa-circle-notch fa-spin"></i></div>
    <div class="activity-content">Loading recent activity from GitHub...</div>
  </div>
</div>

<!-- ==================== 贡献热力图 ==================== -->
<h2 class="section-title">
  <span class="section-num">05.</span>
  Contribution Graph <span class="lang-sub">/ 贡献热力图</span>
</h2>

<div class="heatmap-container">
  <img id="heatmap-img" src="https://ghchart.rshah.org/huanglii" alt="GitHub Contribution Graph" onerror="this.parentElement.style.display='none'">
  <div class="heatmap-legend">
    Less
    <span class="heatmap-cell" style="background:#ebedf0"></span>
    <span class="heatmap-cell" style="background:#9be9a8"></span>
    <span class="heatmap-cell" style="background:#40c463"></span>
    <span class="heatmap-cell" style="background:#30a14e"></span>
    <span class="heatmap-cell" style="background:#216e39"></span>
    More
  </div>
</div>

<!-- ==================== 联系方式 ==================== -->
<div class="contact-section">
  <h2><i class="fa-solid fa-satellite-dish"></i> Get in Touch</h2>
  <p>欢迎交流 · Feel free to reach out</p>
  <div class="contact-links">
    <a class="contact-link github" href="https://github.com/huanglii">
      <i class="fa-brands fa-github"></i> GitHub
    </a>
    <a class="contact-link email" href="mailto:huanglii@users.noreply.github.com">
      <i class="fa-solid fa-envelope"></i> Email
    </a>
  </div>
</div>

<!-- ==================== GitHub 动态数据脚本 ==================== -->
<script src="assets/js/github-data.js"></script>
