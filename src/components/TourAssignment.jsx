import React, { useState } from "react";
import { users, bookings } from "../data";

const TourAssignment = () => {
  const [assignedTour, setAssignedTour] = useState({ user: "", booking: "" });

  const handleAssign = () => {
    if (assignedTour.user && assignedTour.booking) {
      alert(`Tour assigned successfully!\n\nCustomer: ${assignedTour.user}\nBooking: ${assignedTour.booking}`);
    } else {
      alert("Please select both a customer and a booking before assigning.");
    }
  };

  return (
    <div style={{ 
      padding: "20px", 
      borderRadius: "10px", 
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "auto",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "#333" }}>
        Assign a Tour to Customers
      </h2>

      <select
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onChange={(e) => setAssignedTour({ ...assignedTour, user: e.target.value })}
        onMouseOver={(e) => (e.target.style.borderColor = "#ff6600")}
        onMouseOut={(e) => (e.target.style.borderColor = "#ccc")}
      >
        <option value="">Select a Customer</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>

      <select
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onChange={(e) => setAssignedTour({ ...assignedTour, booking: e.target.value })}
        onMouseOver={(e) => (e.target.style.borderColor = "#ff6600")}
        onMouseOut={(e) => (e.target.style.borderColor = "#ccc")}
      >
        <option value="">Select a Booking</option>
        {bookings.map((booking) => (
          <option key={booking.id} value={booking.destination}>
            {booking.destination}
          </option>
        ))}
      </select>

      <button
        style={{
          width: "100%",
          padding: "10px",
          background: "linear-gradient(90deg, #ff6600, #ffa500)", 
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onClick={handleAssign}
        onMouseOver={(e) => (e.target.style.opacity = "0.8")}
        onMouseOut={(e) => (e.target.style.opacity = "1")}
      >
        Assign Tour
      </button>
    </div>
  );
};

export default TourAssignment;
