import Layout from "../components/Layout";
import "./Laboratories.css";

function Laboratories() {

  const labs = [
    {
      id: 1,
      lab: "Computer Lab A",
      location: "Building A",
      devices: 30,
      status: "Available"
    },
    {
      id: 2,
      lab: "Networking Lab",
      location: "Building B",
      devices: 25,
      status: "In Use"
    },
    {
      id: 3,
      lab: "AI Laboratory",
      location: "Building C",
      devices: 20,
      status: "Maintenance"
    },
    {
      id: 4,
      lab: "Programming Lab",
      location: "Building D",
      devices: 35,
      status: "Available"
    }
  ];

  return (
    <Layout>

      <h1>Laboratories</h1>

      <p>Monitor laboratories and equipment availability.</p>

      <table className="lab-table">

        <thead>
          <tr>
            <th>Laboratory</th>
            <th>Location</th>
            <th>Computers</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {labs.map((lab) => (

            <tr key={lab.id}>
              <td>{lab.lab}</td>
              <td>{lab.location}</td>
              <td>{lab.devices}</td>
              <td>{lab.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default Laboratories;