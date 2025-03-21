import React, { useState } from "react";
import { users as initialUsers } from "../data";

const CustomerList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateUser = () => {
    if (!newUser.name || !newUser.email || !newUser.phone) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { ...updatedUsers[editIndex], ...newUser };
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
    }

    setNewUser({ name: "", email: "", phone: "" });
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEditUser = (index) => {
    setNewUser(users[index]);
    setEditIndex(index);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Customer List</h2>

      <div style={formContainerStyle}>
        <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Name" style={inputStyle} />
        <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" style={inputStyle} />
        <input type="tel" name="phone" value={newUser.phone} onChange={handleInputChange} placeholder="Phone" style={inputStyle} />
        <button onClick={handleAddOrUpdateUser} style={editIndex !== null ? updateButtonStyle : addButtonStyle}>
          {editIndex !== null ? "Update Customer" : "Add Customer"}
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Phone</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.phone}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEditUser(index)} style={updateButtonStyle}>Update</button>
                <button onClick={() => handleDeleteUser(index)} style={removeButtonStyle}>Remove</button>
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

export default CustomerList;
