import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function Home() {
  return <h1 className="text-2xl">Home Page</h1>;
}

function About() {
  return <h1 className="text-2xl">About Page</h1>;
}

export default function App() {
  return (
    <Router>
      <nav className="p-4 space-x-4 bg-gray-200">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
      </nav>

      <Routes>
        {/* Basic routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested routes for Profile */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
