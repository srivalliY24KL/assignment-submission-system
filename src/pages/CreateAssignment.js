import React, { useState } from "react";

function CreateAssignment() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    const newAssignment = {
      id: Date.now(),
      title,
      description
    };

    const existing = JSON.parse(localStorage.getItem("assignments")) || [];

    localStorage.setItem(
      "assignments",
      JSON.stringify([...existing, newAssignment])
    );

    alert("Assignment Created Successfully!");

    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Create Assignment</h2>

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Assignment Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateAssignment;