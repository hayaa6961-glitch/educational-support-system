import Layout from "../components/Layout";
import "./Profile.css";

function Profile() {
  return (
    <Layout>

      <h1>Profile</h1>

      <div className="profile-card">

        <div className="avatar">
          HA
        </div>

        <h2>Haya Alharbi</h2>

        <p><strong>Role:</strong> Administrator</p>

        <p><strong>Email:</strong> haya@example.com</p>

        <p><strong>Department:</strong> Educational Platforms Management</p>

        <p><strong>University:</strong> Prince Sattam bin Abdulaziz University</p>

      </div>

    </Layout>
  );
}

export default Profile;