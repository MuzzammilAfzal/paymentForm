# Payment Form Application

A full-stack payment form application built with React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose.

The application allows users to:

- Submit payment details (Name, Email, Amount)
- Store payment records in MongoDB
- Retrieve payment history using Name and Email
- Display payment records in a responsive user interface

---

## Live Demo
https://payment-form-pearl.vercel.app

---

## Features

### Payment Submission
- Enter Name, Email, and Amount
- Submit payment details
- Store records in MongoDB
- Success and error alerts using SweetAlert2

### Payment Records
- Search payment history using Name and Email
- Fetch data from backend API
- Display payment records dynamically

### Responsive Design
- Mobile-friendly UI
- Built with Tailwind CSS
- Loading spinner during API requests

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- SweetAlert2
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

# Project Structure

```bash
paymentForm/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Loading.jsx
│   │   │   ├── PaymentForm.jsx
│   │   │   └── PaymentRecords.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── db/
│   │   └── schema.js
│   │
│   ├── server.js
│   ├── vercel.json
│   └── package.json
│
└── README.md
```

---

# API Endpoints

## Create Payment

### Request

```http
POST /payment
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "amount": 500
}
```

### Success Response

```json
{
  "message": "Payment details saved successfully"
}
```

---

## Get Payment Records

### Request

```http
GET /payments
```

### Headers

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Response

```json
[
  {
    "_id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "amount": 500
  }
]
```

---

# Database Schema

```js
{
  name: String,
  email: String,
  amount: Number
}
```

---

# Environment Variables

## Backend (.env)

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
```

---

## Frontend (.env)

Create a `.env` file inside the frontend folder:

```env
VITE_URL=http://localhost:3000
```

For production:

```env
VITE_URL=https://your-backend-url.vercel.app
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/MuzzammilAfzal/paymentForm.git
```

```bash
cd paymentForm
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
MONGO_URI=your_mongodb_connection_string
```

Run server:

```bash
node server.js
```

Server starts on:

```bash
http://localhost:3000
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
VITE_URL=http://localhost:3000
```

Run development server:

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:5173
```

---

# Deployment

## Frontend Deployment (Vercel)

1. Push code to GitHub
2. Import repository into Vercel
3. Configure environment variable:

```env
VITE_URL=https://your-backend-url.vercel.app
```


---

## Backend Deployment (Vercel)

1. Import backend project into Vercel
2. Add environment variable:

```env
MONGO_URI=your_mongodb_connection_string
```

3. Deploy

# Author

**Muzzammil Afzal**
- GitHub: https://github.com/MuzzammilAfzal
