import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

export default function App() {
  // Simulated auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/123">Blog Example</Link>
        <button
          onClick={() => setIsAuthenticated(!isAuthenticated)}
          style={{ marginLeft: "1rem" }}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Blog Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}
