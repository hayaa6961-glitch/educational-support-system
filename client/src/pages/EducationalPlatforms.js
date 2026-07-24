import Layout from "../components/Layout";
import "./EducationalPlatforms.css";

function EducationalPlatforms() {

  const platforms = [
    {
      id: 1,
      name: "Blackboard Ultra",
      status: "Online",
      users: 1520,
      version: "Ultra"
    },
    {
      id: 2,
      name: "Microsoft Teams",
      status: "Online",
      users: 980,
      version: "2026"
    },
    {
      id: 3,
      name: "Zoom",
      status: "Online",
      users: 320,
      version: "6.0"
    },
    {
      id: 4,
      name: "Moodle",
      status: "Maintenance",
      users: 215,
      version: "4.5"
    }
  ];

  return (
    <Layout>

      <h1>Educational Platforms</h1>

      <p>
        Monitor educational platforms and their current status.
      </p>

      <table className="platform-table">

        <thead>

          <tr>

            <th>Platform</th>

            <th>Status</th>

            <th>Users</th>

            <th>Version</th>

          </tr>

        </thead>

        <tbody>

          {platforms.map((platform) => (

            <tr key={platform.id}>

              <td>{platform.name}</td>

              <td>
                <span
                  className={
                    platform.status === "Online"
                      ? "online"
                      : "maintenance"
                  }
                >
                  {platform.status}
                </span>
              </td>

              <td>{platform.users}</td>

              <td>{platform.version}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default EducationalPlatforms;