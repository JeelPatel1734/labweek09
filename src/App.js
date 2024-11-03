import React from 'react';
import './App.css';

function App() {
  const studentInfo = {
    course: "Welcome to Fullstack Development - I",
    labTitle: "React JS Programming Week09 Lab exercise",
    studentID: "101410368",
    name: "JEEL PATEL",
    college: "George Brown College, Toronto"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="App-logo" alt="logo" />
        <h1>Welcome to {studentInfo.course}</h1>
        <h2>{studentInfo.labTitle}</h2>
        <p>{studentInfo.studentID}</p>
        <p>{studentInfo.name}</p>
        <p>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;

