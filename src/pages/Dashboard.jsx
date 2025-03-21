import React from "react";
import Analytics from "../components/Analytics";

const Dashboard = () => {
  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.header}>Dashboard</h2>
        <Analytics />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    background: "#ecf0f1",
    minHeight: "100vh",
    textAlign: "center",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "20px",
  },
};

export default Dashboard;