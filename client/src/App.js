import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";

import Dashboard from "./pages/Dashboard";
import EducationalPlatforms from "./pages/EducationalPlatforms";
import CourseManagement from "./pages/CourseManagement";
import SupportTickets from "./pages/SupportTickets";
import Laboratories from "./pages/Laboratories";
import AIAssistant from "./pages/AIAssistant";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/platforms"
          element={<EducationalPlatforms />}
        />

        <Route
          path="/courses"
          element={<CourseManagement />}
        />

        <Route
          path="/tickets"
          element={<SupportTickets />}
        />

        <Route
          path="/labs"
          element={<Laboratories />}
        />

        <Route
          path="/ai"
          element={<AIAssistant />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;