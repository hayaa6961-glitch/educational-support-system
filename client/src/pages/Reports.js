import Layout from "../components/Layout";
import "./Reports.css";

function Reports() {

  const reports = [
    {
      id: 1,
      title: "Monthly Users Report",
      date: "2026-07-01",
      type: "Users"
    },
    {
      id: 2,
      title: "Support Tickets Report",
      date: "2026-07-05",
      type: "Tickets"
    },
    {
      id: 3,
      title: "Laboratories Report",
      date: "2026-07-10",
      type: "Laboratories"
    },
    {
      id: 4,
      title: "Courses Report",
      date: "2026-07-15",
      type: "Courses"
    }
  ];

  return (
    <Layout>

      <h1>Reports</h1>

      <p>View and manage system reports.</p>

      <table className="report-table">

        <thead>
          <tr>
            <th>Report</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>

          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td>{report.date}</td>
              <td>{report.type}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default Reports;