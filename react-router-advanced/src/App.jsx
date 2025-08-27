import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/Profile/ProfileDetails";
import ProfileSettings from "./components/Profile/ProfileSettings";
import Post from "./components/Post";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Regular route */}
        <Route path="/" element={<Home />} />

        {/* Nested routes under Profile */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="/blog/:id" element={<BlogPost />} />

        </Route>

        {/* Dynamic route */}
        <Route path="/posts/:id" element={<Post />} />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
