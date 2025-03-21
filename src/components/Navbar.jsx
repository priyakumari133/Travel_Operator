import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Travel Operator Admin Dashboard</div>
      <div style={navRight}>
        <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} style={searchBar} />
        <button style={buttonStyle} onClick={handleLogin}>Login</button>
        <button style={buttonStyle} onClick={handleSignup}>Sign Up</button>
      </div>
    </nav>
  );
};

const navbarStyle = {
  background: "linear-gradient(90deg, #232526, #414345)",
  color: "white",
  padding: "12px 25px",
  fontSize: "20px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.15)",
  borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
  position: "sticky",
  top: "0",
  zIndex: "1000",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const navRight = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const searchBar = {
  padding: "8px",
  width: "200px",
  borderRadius: "20px",
  border: "none",
  outline: "none",
};

const buttonStyle = {
  padding: "8px 15px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer",
  background: "#fff",
  color: "rgb(5, 131, 136)",
  fontWeight: "bold",
};

export default Navbar;
