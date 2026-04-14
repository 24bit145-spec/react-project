import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // later replace with real auth

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}