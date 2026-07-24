import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import PlatformStatus from "../components/PlatformStatus";
import RecentTickets from "../components/RecentTickets";
import "./Dashboard.css";

function Dashboard() {
  return (
    <Layout>

      <h1>Dashboard</h1>

      <p>Welcome to Academic Support Portal</p>

      <div className="cards">

        <StatCard
          title="Educational Platforms"
          value="4"
        />

        <StatCard
          title="Courses"
          value="28"
        />

        <StatCard
          title="Support Tickets"
          value="15"
        />

        <StatCard
          title="Laboratories"
          value="12"
        />

        <StatCard
          title="AI Requests"
          value="86"
        />

        <StatCard
          title="Reports"
          value="10"
        />

      </div>

      <PlatformStatus />

      <RecentTickets />

    </Layout>
  );
}

export default Dashboard;