import React from 'react';
import AttendanceForm from './components/AttendanceForm';
import AbsentSummary from './components/AbsentSummary';
import './styles.css';
import logo from './assets/logo.jpg';


function App() {
  return (
    <div className="container">
      <img
        src={logo}
        alt="Sahyadri College Of Engineering and Management"
        className="college-logo"
      />
      <div className="panel-container">
        <AttendanceForm />
        <AbsentSummary />
      </div>
    </div>
  );
}

export default App;