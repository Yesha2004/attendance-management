import React, { useState } from 'react';

const subjectOptions = {
  '4th': ['Operating System', 'Computer Organization and Architecture'],
  '6th': ['Software Engineering and Project Management', 'System Software and Compiler design'],
};

function AttendanceForm() {
  const [semester, setSemester] = useState('4th');
  const [subject, setSubject] = useState(subjectOptions['4th'][0]);
  const [cie, setCie] = useState('CIE 1');
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [status, setStatus] = useState('Present');

  const handleSemesterChange = (e) => {
    const newSemester = e.target.value;
    setSemester(newSemester);
    setSubject(subjectOptions[newSemester][0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/attendance/mark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ semester, subject, cie, name, usn, status })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Attendance marked successfully');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error marking attendance:', error);
      alert('Failed to mark attendance');
    }
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>CIE Attendance</h2>
      <label>Semester</label>
      <select value={semester} onChange={handleSemesterChange}>
        <option>4th</option>
        <option>6th</option>
      </select>

      <label>Subject</label>
      <select value={subject} onChange={e => setSubject(e.target.value)}>
        {subjectOptions[semester].map((sub, index) => (
          <option key={index}>{sub}</option>
        ))}
      </select>

      <label>CIE</label>
      <select value={cie} onChange={e => setCie(e.target.value)}>
        <option>CIE 1</option>
        <option>CIE 2</option>
        <option>CIE 3</option>
      </select>

      <label>Student Name</label>
      <input value={name} onChange={e => setName(e.target.value)} />

      <label>USN</label>
      <input value={usn} onChange={e => setUsn(e.target.value)} />

      <label>Status</label>
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button type="submit">Mark Attendance</button>
    </form>
  );
}

export default AttendanceForm;
