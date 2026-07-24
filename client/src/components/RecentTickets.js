import "./RecentTickets.css";

function RecentTickets() {
  return (
    <div className="recent-tickets">

      <h2>Recent Support Tickets</h2>

      <table>

        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>#1025</td>
            <td>Login Issue</td>
            <td className="open">Open</td>
          </tr>

          <tr>
            <td>#1026</td>
            <td>Course Access</td>
            <td className="progress">In Progress</td>
          </tr>

          <tr>
            <td>#1027</td>
            <td>Password Reset</td>
            <td className="closed">Resolved</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default RecentTickets;