import "./PlatformStatus.css";

function PlatformStatus() {
  return (
    <div className="platform-status">

      <h2>Educational Platforms Status</h2>

      <div className="platform-item">
        <span>Blackboard Ultra</span>
        <span className="online">● Online</span>
      </div>

      <div className="platform-item">
        <span>Microsoft Teams</span>
        <span className="online">● Online</span>
      </div>

      <div className="platform-item">
        <span>Zoom</span>
        <span className="online">● Online</span>
      </div>

    </div>
  );
}

export default PlatformStatus;