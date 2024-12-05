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
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>React CRUD App</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={editingIndex === null ? addItem : updateItem}>
        {editingIndex === null ? "Add" : "Update"}
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {item}{" "}
            <button onClick={() => editItem(index)}>Edit</button>{" "}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUDApp;
