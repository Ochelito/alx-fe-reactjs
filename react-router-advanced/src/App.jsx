import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet, useParams } from "react-router-dom";
import { useState } from "react";

// Home + About
function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}

// Profile + Nested Routes
function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}
function ProfileDetails() {
  return <h3>Profile Details Section</h3>;
}
function ProfileSettings() {
  return <h3>Profile Settings Section</h3>;
}

// Dynamic Route
function BlogPost({ id }) {
  return <h2>Blog Post ID: {id}</h2>;
}
function BlogPostWrapper() {
  const { postId } = useParams();
  return <BlogPost id={postId} />;
}

// Protected Route Component
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // redirect to home if not logged in
  }
  return children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/101">Blog Post 101</Link>
      </nav>

      {/* Fake login/logout toggle */}
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>

      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Profile Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:postId" element={<BlogPostWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
