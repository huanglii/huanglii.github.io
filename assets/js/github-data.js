(function () {
  var CACHE_KEY = 'github_data_cache';
  var CACHE_TTL = 6 * 3600000; // 6 hours
  var ACCOUNTS = ['huanglii', 'naivemap'];
  var PRIMARY_USER = 'huanglii';

  var langColors = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'HTML': '#e34c26',
    'CSS': '#563d7c', 'SCSS': '#c6538c', 'Python': '#3572A5',
    'Shell': '#89e051', 'Vue': '#41b883', 'GLSL': '#5686a5',
    'C': '#555555', 'C++': '#f34b7d', 'Java': '#b07219',
    'Go': '#00ADD8', 'Rust': '#dea584', 'Dockerfile': '#384d54',
    'Makefile': '#427819', 'Markdown': '#083fa1', 'JSON': '#292929',
    'Less': '#1d365d', 'Stylus': '#ff6347', 'Roff': '#ecdebe',
    'Batchfile': '#C1F12E', 'Astro': '#ff5a03', 'Svelte': '#ff3e00'
  };

  function fetchJSON(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  function escapeHtml(str) {
    var d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
  }

  function formatTime(dateStr) {
    var d = new Date(dateStr);
    var diff = (Date.now() - d.getTime()) / 1000;
    if (diff < 60) return 'just now';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
    return d.toLocaleDateString();
  }

  /* ===== 渲染：技术标签 ===== */
  function renderTechTags(langStats) {
    var container = document.getElementById('tech-tags');
    if (!container) return;
    var sorted = Object.keys(langStats)
      .map(function (k) { return [k, langStats[k]]; })
      .sort(function (a, b) { return b[1] - a[1]; })
      .slice(0, 12);
    if (!sorted.length) return;
    container.innerHTML = '';
    var maxBytes = sorted[0][1] || 1;
    sorted.forEach(function (item) {
      var tag = document.createElement('span');
      tag.className = 'tech-tag';
      var color = langColors[item[0]] || '#7aa2f7';
      tag.style.color = color;
      tag.style.borderColor = color + '55';
      tag.style.opacity = (0.55 + 0.45 * (item[1] / maxBytes)).toFixed(2);
      tag.textContent = item[0];
      container.appendChild(tag);
    });
  }

  /* ===== 渲染：用户统计 ===== */
  function renderStats(profile, repos, langCount) {
    var totalStars = repos.reduce(function (s, r) { return s + (r.stargazers_count || 0); }, 0);
    var el;
    if (el = document.getElementById('stat-repos')) el.textContent = profile.public_repos || repos.length;
    if (el = document.getElementById('stat-stars')) el.textContent = totalStars;
    if (el = document.getElementById('stat-followers')) el.textContent = profile.followers || 0;
    if (el = document.getElementById('stat-langs')) el.textContent = langCount;
  }

  /* ===== 渲染：项目 Star/Fork ===== */
  function renderProjectStats(repos) {
    var repoMap = {};
    repos.forEach(function (r) { repoMap[r.full_name.toLowerCase()] = r; });
    document.querySelectorAll('.project-card[data-repo]').forEach(function (card) {
      var repo = repoMap[card.getAttribute('data-repo').toLowerCase()];
      if (!repo) return;
      var starEl = card.querySelector('.star-count');
      var forkEl = card.querySelector('.fork-count');
      var statsEl = card.querySelector('.project-github-stats');
      if (starEl) starEl.textContent = repo.stargazers_count || 0;
      if (forkEl) forkEl.textContent = repo.forks_count || 0;
      if (statsEl) statsEl.style.display = 'flex';
    });
  }

  /* ===== 渲染：最近活动 ===== */
  function renderActivity(events) {
    var container = document.getElementById('activity-list');
    if (!container) return;
    var filtered = events.filter(function (e) {
      return ['PushEvent', 'CreateEvent', 'ReleaseEvent', 'WatchEvent', 'ForkEvent', 'PublicEvent'].indexOf(e.type) !== -1;
    }).slice(0, 6);
    if (!filtered.length) { container.innerHTML = '<div class="activity-item"><div class="activity-icon"><i class="fa-solid fa-circle-info"></i></div><div class="activity-content">No recent activity</div></div>'; return; }
    container.innerHTML = '';
    filtered.forEach(function (e) {
      var icon = 'fa-code-commit', action = '';
      switch (e.type) {
        case 'PushEvent':
          icon = 'fa-code-commit';
          var n = e.payload && e.payload.commits ? e.payload.commits.length : 1;
          action = 'pushed ' + n + ' commit' + (n > 1 ? 's' : '') + ' to';
          break;
        case 'CreateEvent':
          icon = 'fa-plus'; action = 'created ' + (e.payload && e.payload.ref_type ? e.payload.ref_type : 'repo'); break;
        case 'ReleaseEvent':
          icon = 'fa-tag'; action = 'released'; break;
        case 'WatchEvent':
          icon = 'fa-star'; action = 'starred'; break;
        case 'ForkEvent':
          icon = 'fa-code-fork'; action = 'forked'; break;
        case 'PublicEvent':
          icon = 'fa-eye'; action = 'made public'; break;
      }
      var repoName = e.repo && e.repo.name ? e.repo.name : '';
      var item = document.createElement('div');
      item.className = 'activity-item';
      item.innerHTML =
        '<div class="activity-icon"><i class="fa-solid ' + icon + '"></i></div>' +
        '<div class="activity-content">' +
        '<span class="activity-action">' + escapeHtml(action) + '</span> ' +
        '<a href="https://github.com/' + escapeHtml(repoName) + '" class="activity-repo">' + escapeHtml(repoName) + '</a>' +
        '<span class="activity-time">' + formatTime(e.created_at) + '</span>' +
        '</div>';
      container.appendChild(item);
    });
  }

  /* ===== 降级处理 ===== */
  function renderFallback() {
    var c = document.getElementById('tech-tags');
    if (c) { c.innerHTML = ''; ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python'].forEach(function (l) {
      var t = document.createElement('span'); t.className = 'tech-tag'; t.textContent = l; c.appendChild(t);
    }); }
    var a = document.getElementById('activity-list');
    if (a) a.innerHTML = '<div class="activity-item"><div class="activity-icon"><i class="fa-solid fa-circle-info"></i></div><div class="activity-content">Activity unavailable (API rate limit)</div></div>';
  }

  /* ===== 检查缓存 ===== */
  try {
    var cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      renderTechTags(cached.langStats);
      renderStats(cached.profile, cached.repos, Object.keys(cached.langStats).length);
      renderProjectStats(cached.repos);
      renderActivity(cached.events);
      return;
    }
  } catch (e) {}

  /* ===== 并发获取所有数据 ===== */
  var langStats = {};

  Promise.all([
    fetchJSON('https://api.github.com/users/' + PRIMARY_USER),
    Promise.all(ACCOUNTS.map(function (acc) {
      return fetchJSON('https://api.github.com/users/' + acc + '/repos?per_page=100&type=public')
        .then(function (repos) { return repos.filter(function (r) { return !r.fork; }); })
        .catch(function () { return []; });
    })),
    fetchJSON('https://api.github.com/users/' + PRIMARY_USER + '/events/public?per_page=30').catch(function () { return []; })
  ])
    .then(function (results) {
      var profile = results[0];
      var flat = [];
      results[1].forEach(function (r) { flat = flat.concat(r); });
      var events = results[2];

      // 分批获取语言数据
      function batch(i) {
        if (i >= flat.length) return Promise.resolve();
        var slice = flat.slice(i, i + 8);
        return Promise.all(slice.map(function (repo) {
          return fetchJSON(repo.languages_url).catch(function () { return {}; });
        })).then(function (langResults) {
          langResults.forEach(function (langs) {
            Object.keys(langs).forEach(function (lang) {
              langStats[lang] = (langStats[lang] || 0) + langs[lang];
            });
          });
          return batch(i + 8);
        });
      }
      return batch(0).then(function () {
        return { profile: profile, repos: flat, events: events, langStats: langStats };
      });
    })
    .then(function (data) {
      renderTechTags(data.langStats);
      renderStats(data.profile, data.repos, Object.keys(data.langStats).length);
      renderProjectStats(data.repos);
      renderActivity(data.events);
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          profile: data.profile,
          repos: data.repos,
          events: data.events,
          langStats: data.langStats
        }));
      } catch (e) {}
    })
    .catch(function () { renderFallback(); });
})();
