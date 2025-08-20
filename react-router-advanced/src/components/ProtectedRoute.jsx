import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute ensures only authenticated users can access certain pages.
 * If not authenticated, it redirects to the Home page.
 */
export default function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // redirect unauthenticated users
  }
  return children;
}
