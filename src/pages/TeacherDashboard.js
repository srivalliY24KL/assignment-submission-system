import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TeacherDashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(stored);
  }, []);

  const handleGrade = (id, grade, feedback) => {
    const updated = submissions.map((s) =>
      s.id === id ? { ...s, grade, feedback } : s
    );

    localStorage.setItem("submissions", JSON.stringify(updated));
    setSubmissions(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Teacher Dashboard</h2>

      <Link to="/create">
        <button>Create Assignment</button>
      </Link>

      <h3>Student Submissions</h3>

      {submissions.length === 0 ? (
        <p>No submissions yet</p>
      ) : (
        submissions.map((s) => (
          <div key={s.id} style={{ marginBottom: "20px" }}>
            <p><b>Submission:</b> {s.fileName}</p>

            <input
              type="text"
              placeholder="Grade"
              onChange={(e) =>
                handleGrade(s.id, e.target.value, s.feedback)
              }
            />

            <br /><br />

            <input
              type="text"
              placeholder="Feedback"
              onChange={(e) =>
                handleGrade(s.id, s.grade, e.target.value)
              }
            />

            <p>
              <b>Grade:</b> {s.grade} | 
              <b> Feedback:</b> {s.feedback}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default TeacherDashboard;