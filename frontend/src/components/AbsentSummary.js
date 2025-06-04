import React, { useState, useEffect } from 'react';

const subjectOptions = {
  '4th': ['Operating System', 'Computer Organization and Architecture'],
  '6th': ['Software Engineering and Project Management', 'System Software and Compiler design'],
};

function AttendanceSummary() {
  const [semester, setSemester] = useState('4th');
  const [subject, setSubject] = useState(subjectOptions['4th'][0]);
  const [cie, setCie] = useState('CIE 1');
  const [absentees, setAbsentees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch absentee data whenever filters change
  useEffect(() => {
    async function fetchAbsentees() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5000/api/attendance/absentees?semester=${semester}&subject=${encodeURIComponent(subject)}&cie=${encodeURIComponent(cie)}`);
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch absentees');
        }
        const data = await response.json();
        setAbsentees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAbsentees();
  }, [semester, subject, cie]);

  const handleSemesterChange = (e) => {
    const newSemester = e.target.value;
    setSemester(newSemester);
    setSubject(subjectOptions[newSemester][0]);
  };

  return (
    <div className="panel">
      <h2>Absentees</h2>

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

      <h3>Absentees List</h3>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && absentees.length === 0 && (
        <p>No absentees found for the selected filters.</p>
      )}

      <ul>
        {absentees.map((student, idx) => (
          <li key={idx}>{student.name} ({student.usn})</li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceSummary;
