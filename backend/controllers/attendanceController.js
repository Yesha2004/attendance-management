const mongoose = require('mongoose');
const attendanceSchema = require('../models/Attendance');

// Dynamic connection using semester
const getDb = (semester) => {
  const uri = semester === '4th' ? process.env.MONGO_URI_4TH : process.env.MONGO_URI_6TH;
  const dbName = semester === '4th' ? 'attendance_4th' : 'attendance_6th';

  const connection = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  return connection.model('Attendance', attendanceSchema, 'records');
};

// Save attendance
exports.markAttendance = async (req, res) => {
  const { name, usn, semester, subject, cie, status } = req.body;

  try {
    const Attendance = getDb(semester);
    const newEntry = new Attendance({ name, usn, semester, subject, cie, status });
    await newEntry.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark attendance' });
  }
};

// Get absentees
exports.getAbsentees = async (req, res) => {
  const { semester, subject, cie } = req.query;

  try {
    const Attendance = getDb(semester);
    const absentees = await Attendance.find({ subject, cie, status: 'Absent' });
    res.json(absentees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch absentees' });
  }
};
