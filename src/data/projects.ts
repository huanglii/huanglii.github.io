export interface Project {
  repo: string;
  icon: string;
  name: string;
  link: string;
  desc: string;
  badges: string[];
  subItems?: { label: string; href: string; desc: string }[];
}

export const projects: Project[] = [
  {
    repo: "huanglii/mapbox-gl-js-cookbook",
    icon: "📚",
    name: "Mapbox GL JS Cookbook",
    link: "https://huanglii.github.io/mapbox-gl-js-cookbook/",
    desc: "A collection of practical recipes and examples for Mapbox GL JS development.\nMapbox GL JS 实战指南与示例集合。",
    badges: ["📖 Docs", "🌍 Demo"],
  },
  {
    repo: "naivemap/webgis-starter",
    icon: "📘",
    name: "WebGIS Starter",
    link: "https://www.naivemap.com/webgis-starter/",
    desc: "A comprehensive open-source book for getting started with WebGIS.\n一本较为全面的 WebGIS 开源入门书籍。",
    badges: ["📖 Book", "open-source"],
  },
  {
    repo: "naivemap/mapbox-gl-layers",
    icon: "🧩",
    name: "Mapbox GL Layers",
    link: "https://github.com/naivemap/mapbox-gl-layers",
    desc: "Implementations of Mapbox's custom layer API.\nMapbox 自定义图层 API 的系列实现。",
    badges: ["📦 Monorepo", "3 packages"],
    subItems: [
      {
        label: "EChartsLayer",
        href: "https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-echarts-layer/README.md",
        desc: "Apache ECharts lines & scatter integration",
      },
      {
        label: "ImageLayer",
        href: "https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-image-layer/README.md",
        desc: "Static image loading with reprojection (Arrugator + Proj4js)",
      },
      {
        label: "GridLayer",
        href: "https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-grid-layer/README.md",
        desc: "Colorful grid data rendering",
      },
    ],
  },
  {
    repo: "naivemap/mapbox-gl-naive-map",
    icon: "🗺️",
    name: "NaiveMap",
    link: "https://github.com/naivemap/mapbox-gl-naive-map",
    desc: "Extended Map class built on top of mapboxgl.Map with extra utilities.\n基于 mapboxgl.Map 的扩展地图封装。",
    badges: ["🔧 Library", "TypeScript"],
  },
  {
    repo: "naivemap/mapbox-gl-polygon-morpher",
    icon: "🔄",
    name: "PolygonMorpher",
    link: "https://github.com/naivemap/mapbox-gl-polygon-morpher",
    desc: "Morph smoothly between Polygons or MultiPolygons on Mapbox GL maps.\n在 Mapbox GL 地图上实现多边形的平滑形变过渡。",
    badges: ["✨ Animation", "WebGL"],
  },
  {
    repo: "naivemap/location-picker",
    icon: "📍",
    name: "Location Picker",
    link: "https://www.naivemap.com/location-picker",
    desc: "An interactive location picker tool built for web maps.\n一个用于网页地图的交互式位置选取工具。",
    badges: ["🛠️ Tool", "🌍 Online"],
  },
  {
    repo: "huanglii/admin-cn-downloader",
    icon: "⬇️",
    name: "Admin Division Downloader",
    link: "https://huanglii.github.io/admin-cn-downloader/",
    desc: "Download Chinese administrative division boundary data.\n中国行政区划边界数据下载工具。",
    badges: ["🇨🇳 China", "🌍 Online"],
  },
];
