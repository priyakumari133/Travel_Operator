import React from "react";

const Analytics = () => {
  const data = [
    { label: "Total Bookings", value: "10", color: "#ffcccb" },
    { label: "Total Revenue", value: "$12,500", color: "#d1e7dd" },
    { label: "Pending Payments", value: "3", color: "#cfe2ff" },
    { label: "New Customers", value: "5", color: "#f8d7da" },
    { label: "Cancellations", value: "2", color: "#fff3cd" },
  ];

  return (
    <div style={styles.analyticsContainer}>
      {data.map((item, index) => (
        <div key={index} style={{ ...styles.card, background: item.color }}>
          <span style={styles.label}>{item.label}</span>
          <span style={styles.value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  analyticsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    padding: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "150px",
    flex: "1",
    maxWidth: "220px",
  },
  label: {
    fontWeight: "500",
    display: "block",
    marginBottom: "5px",
  },
  value: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#2c3e50",
  },
};

export default Analytics;