# 📘 Attendance Management System

This is a full-stack web application for managing student attendance, focusing on displaying **only absentees** per subject, CIE, and semester. The system supports manual entry, stores data in **MongoDB**, and supports CRUD operations.

![Screenshot 2025-06-04 204100](https://github.com/user-attachments/assets/0f27661e-2025-4dc5-99a0-e96eadcfc72b)

![Screenshot 2025-06-04 204011](https://github.com/user-attachments/assets/d5eb099d-1b94-4d0f-b906-cfab23ee760f)

## 🧩 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB (Compass)
- **HTTP Client**: Fetch API / Postman (for testing)
- **Deployment**: Localhost

---

## 🛠 Folder Structure

![Screenshot 2025-06-04 203210](https://github.com/user-attachments/assets/5fa77fc2-c4fe-409e-a4cd-bb85c86eff0b)

## 🚀 How to Run the Project

### 1️⃣ Create Project Directory

mkdir attendance-management
cd attendance-management

### 2️⃣ Setup Backend

mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv

### Create files:

app.js
.env
models/Attendance.js
routes/attendanceRoutes.js
controllers/attendanceController.js

✅ Add MongoDB URIs in .env:

MONGO_URI_4TH=mongodb://localhost:27017/attendance_4th
MONGO_URI_6TH=mongodb://localhost:27017/attendance_6th
PORT=5000

### 3️⃣ Setup MongoDB Compass

Open MongoDB Compass
Create two databases:

attendance_4th
attendance_6th
Each should have a collection named records

![Screenshot 2025-06-04 204305](https://github.com/user-attachments/assets/cc7ee308-f57d-4a33-966e-543dc09a1ebf)

### 4️⃣ Start Backend Server

From backend folder:
node app.js

### 5️⃣ Setup Frontend
From attendance-management/ directory:

npx create-react-app frontend
cd frontend
Add your component files in:
src/components/AttendanceForm.js
src/components/AbsentSummary.js
Import and use them in App.js

6️⃣ Run Frontend

npm start
App will run at:
📍 http://localhost:3000

🌐 API Endpoints (verify in PostMan API)
✅ Mark Attendance (POST)

POST http://localhost:5000/api/attendance/mark
Body:
json

{
  "name": "Alice",
  "usn": "4CS20CS001",
  "semester": "4th",
  "subject": "Operating System",
  "cie": "CIE 1",
  "status": "Absent"
}

✅ View Absentees (GET)

GET http://localhost:5000/api/attendance/absentees?semester=4th&subject=Operating%20System&cie=CIE%201

### 🎯 Features

 Manual attendance input
 Summary view showing only absentees
 Multiple semesters and subjects
 Stored in MongoDB (Compass)
 React frontend + Express backend
 Filter by semester, subject, and CIE



