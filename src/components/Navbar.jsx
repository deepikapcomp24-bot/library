import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("adminLoggedIn");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column", // vertical layout
        alignItems: "center",
        backgroundColor: "#f4ece7", // soft cream-beige
        padding: "12px 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Top Image (Logo) */}
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        <img
          src="navigation.png" // your downloaded image in public/images
          alt="Library Logo"
          style={{ width: "2000px", height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Navigation Links below the image */}
      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          margin: "12px 0 0 0",
          padding: 0,
          fontSize: "1rem",
          fontWeight: "500",
          color: "#7e6154",
        }}
      >
        <li>
          <button onClick={() => navigate("/home")} style={navButtonStyle}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/profile")} style={navButtonStyle}>
            Profile
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              const isAdminLoggedIn = localStorage.getItem("adminLoggedIn");
              if (isAdminLoggedIn) {
                navigate("/admin-dashboard");
              } else {
                navigate("/admin-login");
              }
            }}
            style={navButtonStyle}
          >
            Admin Dashboard
          </button>
        </li>
        <li>
          <button onClick={handleLogout} style={navButtonStyle}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Shared button style for navbar items
const navButtonStyle = {
  background: "none",
  border: "none",
  color: "#7e6154",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "500",
  padding: "6px 10px",
  transition: "color 0.3s ease",
};

export default Navbar;
