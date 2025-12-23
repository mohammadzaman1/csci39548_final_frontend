import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Simple route guard: if no user, send them to /login
export default function ProtectedRoute({ children }) {
   const user = useSelector((state) => state.auth.user);
   if (!user) return <Navigate to="/login" replace />;
   return children;
}
