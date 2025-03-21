import React from "react";
import TourAssignment from "../components/TourAssignment";

const AssignTours = () => (
  <div style={{ 
    maxWidth: "500px", 
    margin: "auto", 
    padding: "20px", 
    textAlign: "center",
    backgroundColor: "#f9f9f9", 
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  }}>
    <h2 style={{ 
      fontSize: "26px", 
      fontWeight: "bold", 
      marginBottom: "20px", 
      color: "#333" 
    }}>
      {/* Assign Tours to Customers */}
    </h2>
    <TourAssignment />
  </div>
);

export default AssignTours;
