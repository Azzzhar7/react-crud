import React, { useState } from "react";

const CRUDApp = () => {
  const [items, setItems] = useState([]); // State to hold items
  const [inputValue, setInputValue] = useState(""); // State for input field
  const [editingIndex, setEditingIndex] = useState(null); // State to track which item is being edited

  // Add a new item
  const addItem = () => {
    if (inputValue.trim() === "") return; // Prevent adding empty items
    setItems([...items, inputValue]); // Add new item to the list
    setInputValue(""); // Clear the input field
  };

  // Edit an existing item
  const editItem = (index) => {
    setInputValue(items[index]); // Populate the input field with the item's value
    setEditingIndex(index); // Set the index of the item being edited
  };

  // Update an item
  const updateItem = () => {
    if (editingIndex !== null && inputValue.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[editingIndex] = inputValue; // Update the item
      setItems(updatedItems); // Save the updated list
      setEditingIndex(null); // Reset editing index
      setInputValue(""); // Clear the input field
    }
  };

  // Delete an item
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index)); // Remove the selected item
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>React CRUD App</h2>
      <div style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          style={styles.input}
        />
        <button
          onClick={editingIndex === null ? addItem : updateItem}
          style={styles.button}
        >
          {editingIndex === null ? "Add" : "Update"}
        </button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Item</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={styles.tr}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{item}</td>
              <td style={styles.td}>
                <button onClick={() => editItem(index)} style={styles.editButton}>
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(index)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "60%",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
  tr: {
    backgroundColor: "#fff",
  },
  editButton: {
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: "#ffc107",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CRUDApp;
