import type { ActivityItem } from "../hooks/useGitHubData";

interface ActivityProps {
  loading: boolean;
  activities: ActivityItem[];
}

export default function Activity({ loading, activities }: ActivityProps) {
  return (
    <>
      <h2 className="section-title">
        <span className="section-num">04.</span>
        Recent Activity <span className="lang-sub">/ 最近活动</span>
      </h2>
      <div className="activity-list">
        {loading && activities.length === 0 ? (
          <div className="activity-item" style={{ opacity: 0.5 }}>
            <div className="activity-icon">
              <i className="fa-solid fa-circle-notch fa-spin"></i>
            </div>
            <div className="activity-content">Loading recent activity from GitHub...</div>
          </div>
        ) : activities.length === 0 ? (
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fa-solid fa-circle-info"></i>
            </div>
            <div className="activity-content">No recent activity</div>
          </div>
        ) : (
          activities.map((item, i) => (
            <div className="activity-item" key={i}>
              <div className="activity-icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className="activity-content">
                <span className="activity-action">{item.action}</span>{" "}
                <a
                  href={`https://github.com/${item.repo}`}
                  className="activity-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.repo}
                </a>
                <span className="activity-time">{item.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
