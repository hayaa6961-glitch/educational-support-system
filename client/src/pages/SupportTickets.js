import Layout from "../components/Layout";
import "./SupportTickets.css";

function SupportTickets() {

  const tickets = [
    {
      id: 1,
      number: "TK1001",
      issue: "Login Problem",
      user: "Student",
      status: "Open"
    },
    {
      id: 2,
      number: "TK1002",
      issue: "Course Access",
      user: "Instructor",
      status: "Closed"
    },
    {
      id: 3,
      number: "TK1003",
      issue: "Exam Issue",
      user: "Student",
      status: "Pending"
    },
    {
      id: 4,
      number: "TK1004",
      issue: "Password Reset",
      user: "Faculty",
      status: "Closed"
    }
  ];

  return (
    <Layout>

      <h1>Support Tickets</h1>

      <p>Manage technical support requests.</p>

      <table className="ticket-table">

        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Issue</th>
            <th>User Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {tickets.map((ticket) => (

            <tr key={ticket.id}>

              <td>{ticket.number}</td>

              <td>{ticket.issue}</td>

              <td>{ticket.user}</td>

              <td>{ticket.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default SupportTickets;