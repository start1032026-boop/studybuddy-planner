import React, { useState } from "react";

function App() {

  const [subjects, setSubjects] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = async () => {

  const subjectList = subjects.split(",");

  try {
    const response = await fetch("http://127.0.0.1:8000/generate-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subjects: subjectList,
        hours_per_day: parseInt(hours)
      })
    });

    const data = await response.json();

    console.log("Backend response:", data);

  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div style={{ padding: "40px" }}>
      <h1>StudyBuddy Planner</h1>

      <div>
        <label>Subjects:</label><br/>
        <input
          type="text"
          placeholder="Math, Physics, English"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />
      </div>

      <br/>

      <div>
        <label>Hours per day:</label><br/>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </div>

      <br/>

      <button onClick={handleSubmit}>
        Generate Study Plan
      </button>

    </div>
  );
}

export default App;