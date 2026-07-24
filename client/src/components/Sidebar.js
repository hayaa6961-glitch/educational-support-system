import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaBook,
  FaTicketAlt,
  FaFlask,
  FaRobot,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Educational Platforms", path: "/platforms", icon: <FaChalkboardTeacher /> },
    { name: "Course Management", path: "/courses", icon: <FaBook /> },
    { name: "Support Tickets", path: "/tickets", icon: <FaTicketAlt /> },
    { name: "Laboratories", path: "/labs", icon: <FaFlask /> },
    { name: "AI Assistant", path: "/ai", icon: <FaRobot /> },
    { name: "Reports", path: "/reports", icon: <FaChartBar /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">

      <div className="logo">
        <h2>Academic Support Portal</h2>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="logout">
        <Link to="/">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </div>

    </div>
  );
}

export default Sidebar;