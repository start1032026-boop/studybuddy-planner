import React, { useState } from "react";

function App() {

  const [subjects, setSubjects] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    console.log("Subjects:", subjects);
    console.log("Hours per day:", hours);
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