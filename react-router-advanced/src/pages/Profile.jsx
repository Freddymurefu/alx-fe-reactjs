import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./Profile/ProfileDetails";
import ProfileSettings from "./Profile/ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      {/* Local navigation for nested routes */}
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes rendered here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
