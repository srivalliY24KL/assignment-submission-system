import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SubmitAssignment() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("assignments")) || [];
    const found = stored.find((a) => a.id === Number(id));
    setAssignment(found);
  }, [id]);

  const handleSubmit = () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    const newSubmission = {
      id: Date.now(),
      assignmentId: id,
      fileName: file.name,
      grade: "",
      feedback: ""
    };

    const existing =
      JSON.parse(localStorage.getItem("submissions")) || [];

    localStorage.setItem(
      "submissions",
      JSON.stringify([...existing, newSubmission])
    );

    alert("Submitted Successfully!");
  };

  if (!assignment) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Submit Assignment</h2>

      <h3>{assignment.title}</h3>
      <p>{assignment.description}</p>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SubmitAssignment;