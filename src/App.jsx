import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import AssignTours from "./pages/AssignTours";
import Login from "./components/Login"; 
import Signup from "./components/Signup"; 

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Bookings":
        return <Bookings />;
      case "Customers":
        return <Customers />;
      case "Payments":
        return <Payments />;
      case "AssignTours":
        return <AssignTours />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#f5f5f5" }}>
        <Navbar />
        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar setActivePage={setActivePage} />
          <main style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={renderPage()} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
