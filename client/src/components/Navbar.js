import "./Navbar.css";

function Navbar() {

  const storedUser = localStorage.getItem("user");

const user = storedUser ? JSON.parse(storedUser) : null;

  const userName = user?.name || "Guest";
  const userRole = user?.role || "User";

  const initials = userName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <header className="navbar">

      <div className="navbar-title">
        Academic Support Portal
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="navbar-user">

        <div className="notification">
          🔔
        </div>

        <div className="user-info">
          <span className="user-name">{userName}</span>
          <span className="user-role">{userRole}</span>
        </div>

        <div className="user-avatar">
          {initials}
        </div>

      </div>

    </header>
  );
}

export default Navbar;