# 📘 Attendance Management System

This is a full-stack web application for managing student attendance, focusing on displaying **only absentees** per subject, CIE, and semester. The system supports manual entry, stores data in **MongoDB**, and supports CRUD operations.

## 🧩 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB (Compass)
- **HTTP Client**: Fetch API / Postman (for testing)
- **Deployment**: Localhost

---

## 🛠 Folder Structure

attendance-management/
├── backend/
│ ├── controllers/
│ │ └── attendanceController.js
│ ├── models/
│ │ └── Attendance.js
│ ├── routes/
│ │ └── attendanceRoutes.js
│ ├── app.js
│ └── .env
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── AttendanceForm.js
│ │ │ └── AbsentSummary.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── styles.css
│ ├── package.json
│ └── README.md
├── README.md
└── package.json

yaml
Copy
Edit

---

## 🚀 How to Run the Project

### 1️⃣ Create Project Directory

```bash
mkdir attendance-management
cd attendance-management
2️⃣ Setup Backend
bash
Copy
Edit
mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv
Create files:

app.js

.env

models/Attendance.js

routes/attendanceRoutes.js

controllers/attendanceController.js

✅ Add MongoDB URIs in .env:

env
Copy
Edit
MONGO_URI_4TH=mongodb://localhost:27017/attendance_4th
MONGO_URI_6TH=mongodb://localhost:27017/attendance_6th
PORT=5000
3️⃣ Setup MongoDB Compass
Open MongoDB Compass

Create two databases:

attendance_4th

attendance_6th

Each should have a collection named records

4️⃣ Start Backend Server
From backend folder:

bash
Copy
Edit
node app.js
5️⃣ Setup Frontend
From attendance-management/ directory:

bash
Copy
Edit
npx create-react-app frontend
cd frontend
Add your component files in:

src/components/AttendanceForm.js

src/components/AbsentSummary.js

Import and use them in App.js

✅ Install CORS in backend if needed.

6️⃣ Run Frontend
bash
Copy
Edit
npm start
App will run at:
📍 http://localhost:3000

🌐 API Endpoints
✅ Mark Attendance (POST)
bash
Copy
Edit
POST http://localhost:5000/api/attendance/mark
Body:

json
Copy
Edit
{
  "name": "Alice",
  "usn": "4CS20CS001",
  "semester": "4th",
  "subject": "Operating System",
  "cie": "CIE 1",
  "status": "Absent"
}
✅ View Absentees (GET)
perl
Copy
Edit
GET http://localhost:5000/api/attendance/absentees?semester=4th&subject=Operating%20System&cie=CIE%201
🎯 Features
 Manual attendance input

 Summary view showing only absentees

 Multiple semesters and subjects

 Stored in MongoDB (Compass)

 React frontend + Express backend

 Filter by semester, subject, and CIE

📸 Screenshots
Insert UI screenshots here after hosting locally or deploying.

🤝 Contributing
Feel free to fork this repository, raise issues, or submit pull requests.

