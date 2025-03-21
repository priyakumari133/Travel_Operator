import React, { useState } from "react";
import { payments as initialPayments } from "../data";

const PaymentStatus = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [newPayment, setNewPayment] = useState({ customer: "", amount: "", status: "Pending" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdatePayment = () => {
    if (!newPayment.customer || !newPayment.amount || !newPayment.status) {
      alert("All fields are required!");
      return;
    }

    if (editIndex !== null) {
      const updatedPayments = [...payments];
      updatedPayments[editIndex] = { ...updatedPayments[editIndex], ...newPayment };
      setPayments(updatedPayments);
      setEditIndex(null);
    } else {
      setPayments([...payments, { id: Date.now(), ...newPayment }]);
    }

    setNewPayment({ customer: "", amount: "", status: "Pending" });
  };

  const handleDeletePayment = (index) => {
    setPayments(payments.filter((_, i) => i !== index));
  };

  const handleEditPayment = (index) => {
    setNewPayment(payments[index]);
    setEditIndex(index);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Payment Status</h2>

      <div style={formContainerStyle}>
        <input type="text" name="customer" value={newPayment.customer} onChange={handleInputChange} placeholder="Customer Name" style={inputStyle} />
        <input type="number" name="amount" value={newPayment.amount} onChange={handleInputChange} placeholder="Amount" style={inputStyle} />
        <select name="status" value={newPayment.status} onChange={handleInputChange} style={inputStyle}>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
        <button onClick={handleAddOrUpdatePayment} style={editIndex !== null ? updateButtonStyle : addButtonStyle}>
          {editIndex !== null ? "Update Payment" : "Add Payment"}
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={tableHeaderStyle}>Customer</th>
            <th style={tableHeaderStyle}>Amount</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment.id} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={tableCellStyle}>{payment.customer}</td>
              <td style={tableCellStyle}>₹{payment.amount}</td>
              <td style={{ ...tableCellStyle, fontWeight: "bold", color: getStatusColor(payment.status) }}>{payment.status}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEditPayment(index)} style={updateButtonStyle}>Update</button>
                <button onClick={() => handleDeletePayment(index)} style={removeButtonStyle}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  background: "#f8f9fa",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "15px",
  color: "#444",
  background: "#e3f2fd",
  padding: "10px",
  borderRadius: "5px",
  transition: "0.3s",
};

const formContainerStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  flex: 1,
};

const addButtonStyle = {
  padding: "10px 15px",
  background: "linear-gradient(90deg, #ff6600, #ffa500)",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "8px",
};

const updateButtonStyle = {
  padding: "8px 12px",
  background: "#5c85d6",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "8px",
  marginRight: "10px",
};

const removeButtonStyle = {
  padding: "8px 12px",
  background: "#ff6666",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "8px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#fff",
  borderRadius: "8px",
  overflow: "hidden",
};

const headerRowStyle = {
  background: "#f1f8e9",
  color: "#333",
  textAlign: "left",
};

const tableHeaderStyle = {
  padding: "12px",
  fontWeight: "bold",
  borderBottom: "2px solid #ddd",
};

const tableCellStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const rowEvenStyle = {
  background: "#f9f9f9",
};

const rowOddStyle = {
  background: "#ffffff",
};

const getStatusColor = (status) => {
  return status === "Paid" ? "#4caf50" : "#ff3d00";
};

export default PaymentStatus;
