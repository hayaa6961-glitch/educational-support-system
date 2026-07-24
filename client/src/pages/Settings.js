import Layout from "../components/Layout";
import "./Settings.css";

function Settings() {
  return (
    <Layout>

      <h1>Settings</h1>

      <div className="settings-card">

        <h3>System Settings</h3>

        <div className="setting-item">
          <label>Dark Mode</label>
          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <label>Email Notifications</label>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <label>Language</label>

          <select>
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>

        <button className="save-btn">
          Save Changes
        </button>

      </div>

    </Layout>
  );
}

export default Settings;