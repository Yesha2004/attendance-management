const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/attendanceRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/attendance', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
