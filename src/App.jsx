import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
   return (
      <Routes>
         <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Prevents going to dashboard if nto logged in */}
            <Route
               path="/dashboard"
               element={
                  <ProtectedRoute>
                     <Dashboard />
                  </ProtectedRoute>
               }
            />
         </Route>

         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   );
}
