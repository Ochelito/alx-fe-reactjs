import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost"; // ✅ Import BlogPost

function App() {
  const isAuthenticated = true; // Simulated authentication

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="p-4 bg-gray-200 space-x-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline">About</Link>
          <Link to="/profile" className="text-blue-500 hover:underline">Profile</Link>
          <Link to="/blog/123" className="text-blue-500 hover:underline">Blog Example</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* ✅ Protected Route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ✅ Dynamic Route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
