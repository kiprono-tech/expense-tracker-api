## 💰 Simple Expense Tracker / Budget App — Backend

A lightweight **Node.js + Express + MongoDB** backend for tracking income, expenses, and viewing budget summaries.
Designed to help users easily manage daily spending and savings with **JWT authentication** and **RESTful APIs**.

---

### 🚀 Features

* ✅ User authentication (Register & Login)
* 💵 Add, view, and delete **expenses**
* 💰 Add, view, and delete **incomes**
* 📊 Get **summary reports** (Total income, total expenses, and balance)
* 🧩 JWT-based authentication
* 🌐 CORS enabled (ready for frontend connection)
* 🗄 MongoDB for data storage

---

### 🗂 Project Structure

```
expense-tracker-backend/
│
├── server.js                 # Entry point
├── config/
│   └── db.js                 # Database connection
├── controllers/              # Logic for routes
│   ├── authController.js
│   ├── expenseController.js
│   └── incomeController.js
├── middleware/
│   └── authMiddleware.js     # JWT validation
├── models/                   # Mongoose schemas
│   ├── User.js
│   ├── Expense.js
│   └── Income.js
├── routes/                   # Express routes
│   ├── authRoutes.js
│   ├── expenseRoutes.js
│   └── incomeRoutes.js
├── .env                      # Environment variables
└── package.json
```

---

### ⚙️ Tech Stack

* **Backend Framework:** Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Token (JWT)
* **Password Security:** bcryptjs
* **Environment Management:** dotenv
* **Server Management:** nodemon

---

### 🔧 Installation & Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/expense-tracker-backend.git
cd expense-tracker-backend
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root:

```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/expenseDB
JWT_SECRET=your_secret_key
```

#### 4️⃣ Run the Server

```bash
npm run dev
```

Server runs at 👉 **[http://localhost:5000](http://localhost:5000)**

---

### 🧠 API Endpoints

#### **Auth Routes**

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login existing user |

#### **Expense Routes** *(Protected)*

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | `/api/expenses/`    | Add new expense         |
| GET    | `/api/expenses/`    | Fetch user expenses     |
| DELETE | `/api/expenses/:id` | Delete specific expense |

#### **Income Routes** *(Protected)*

| Method | Endpoint               | Description                          |
| ------ | ---------------------- | ------------------------------------ |
| POST   | `/api/incomes/`        | Add new income                       |
| GET    | `/api/incomes/`        | Fetch user incomes                   |
| GET    | `/api/incomes/summary` | Get total income, expenses & balance |

---

### 🧪 Example Request (Add Expense)

**POST** `/api/expenses/`
**Headers:**

```
Authorization: Bearer <token>
Content-Type: application/json
```

**Body:**

```json
{
  "category": "Food",
  "amount": 1200,
  "note": "Groceries for the week"
}
```

**Response:**

```json
{
  "_id": "6720c91b5c3e5e4d9a8b112a",
  "user": "6720c8f85c3e5e4d9a8b111f",
  "category": "Food",
  "amount": 1200,
  "date": "2025-11-01T09:24:43.000Z",
  "note": "Groceries for the week"
}
```

---

### 🧰 Development Tools

* **Postman / Insomnia** – API testing
* **MongoDB Atlas** – Cloud database
* **Render / Railway / Vercel / AWS EC2** – Deployment options

---

### 📈 Future Improvements

* Add monthly analytics dashboard
* Enable CSV or Excel export
* Integrate mobile money APIs (e.g., M-Pesa, Flutterwave)
* Add budget goal tracking and alerts

---

### 👨‍💻 Author

**Vincent Kiprono**
📧 Email: [kiprono.tech@gmail.com](mailto:kiprono.tech@gmail.com)
🌍 Kenya

---

### 📜 License

This project is licensed under the **MIT License** – free for personal and commercial use.

---
