import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      {/* Navigation for nested routes */}
      <nav className="space-x-4">
        <Link to="details" className="text-blue-500 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-500 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* Nested content will render here */}
      <div className="mt-6 p-4 border rounded bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
