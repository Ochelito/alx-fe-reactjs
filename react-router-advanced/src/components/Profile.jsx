import { Routes, Route, Link } from "react-router-dom";

// Subcomponents for nested routes
function ProfileDetails() {
  return <div className="p-4 bg-gray-100 rounded">Here are your profile details.</div>;
}

function ProfileSettings() {
  return <div className="p-4 bg-gray-100 rounded">Here are your profile settings.</div>;
}

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      {/* Local navigation for nested routes */}
      <nav className="space-x-4 mb-4">
        <Link to="details" className="text-blue-500 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-500 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* Define nested routes directly here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

