import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("assignments")) || [];
    setAssignments(stored);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Dashboard</h2>

      <h3>Available Assignments</h3>

      {assignments.length === 0 ? (
        <p>No assignments available</p>
      ) : (
        assignments.map((a) => (
          <div key={a.id} style={{ marginBottom: "20px" }}>
            <h4>{a.title}</h4>
            <p>{a.description}</p>
            <Link to={`/submit/${a.id}`}>
  <button>Submit</button>
</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentDashboard;