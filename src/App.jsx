import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Booklist from './pages/Booklist';
import Profile from './pages/Profile';
import BookDetails from './pages/BookDetails';
import AdminLogin from './pages/Adminlogin';
import Admindashboard from './pages/Admindashboard';

import './App.css';

// Protected route component for admin
const ProtectedAdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('adminLoggedIn') === 'true';
  return isAdmin ? children : <Navigate to="/admin-login" replace />;
};

// Main App component
const App = () => {
  const location = useLocation();

  // Pages where Navbar should be hidden
  const hideNavbar = ['/login', '/register', '/admin-login'].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Public pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book/:id" element={<BookDetails />} />

        {/* Admin dashboard protected */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedAdminRoute>
              <Admindashboard />
            </ProtectedAdminRoute>
          }
        />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

// Wrap App with BrowserRouter
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

