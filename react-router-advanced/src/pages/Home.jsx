import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>

      {isAuthenticated ? (
        <>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
          <br />
          <Link to="/profile">Go to Profile</Link>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={login}>Login</button>
        </>
      )}

      <h3>Blog Links</h3>
      <ul>
        <li><Link to="/blog/1">Blog Post 1</Link></li>
        <li><Link to="/blog/2">Blog Post 2</Link></li>
      </ul>
    </div>
  );
}
