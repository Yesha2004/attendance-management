const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  name: String,
  usn: String,
  semester: String,
  subject: String,
  cie: String,
  status: String,
}, { timestamps: true });

module.exports = attendanceSchema; // exported as schema only for dynamic DBs
