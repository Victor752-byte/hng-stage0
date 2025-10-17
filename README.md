# 🧙 Backend Wizards — Stage 0 Task

## 🚀 Overview
This is my submission for the **Backend Wizards — Stage 0 Task**.  
It’s a simple **NestJS REST API** that returns my profile information along with a **random cat fact** fetched dynamically from the [Cat Facts API](https://catfact.ninja/fact).

---

## 🧩 Endpoint Specification

### **GET** `/me`

Returns your profile data, a random cat fact, and a dynamic UTC timestamp.

#### ✅ Example Response
```json
{
  "status": "success",
  "user": {
    "email": "tochukwuvictor563@gmail.com",
    "name": "Tochukwu Victor Obioha",
    "stack": "Node.js/NestJS, Axios"
  },
  "timestamp": "2025-10-16T12:34:56.789Z", 
  "fact": "Cats sleep for 70% of their lives."
}
```

## ⚙️ Technologies Used
- NestJS - Backend framework
- Axios - For HTTP request
- TypeScript - Type safety
- Node.js - Runtime environment

## 🛠️ Setup Instructions
### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Victor752-byte/hng-stage0.git
cd hng-stage0
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server (Development Mode)

```bash
npm run start:dev
```
---

## 🧪 Testing the Endpoint
### Option 1: Using a browser
Just open:
`http://localhost:3000/me`

### Option 2: Using Postman
- Create a GET request to: `http://localhost:3000/me`
- Send request → You should get a JSON response with your profile and a random cat fact.

## 🪣 Error Handling
If the external Cat Facts API is unavailable, the endpoint returns:
```js
{
  "status": "error",
  "message": "Failed to fetch cat fact",
  "user": {
    "email": "tochukwuvictor563@gmail.com",
    "name": "Tochukwu Victor Obioha",
    "stack": "Node.js/NestJS, axios"
  },
  "timestamp": "2025-10-16T12:34:56.789Z", // this will reflect the current time
  "fact": "Could not retrieve a cat fact at the moment."
}
```
