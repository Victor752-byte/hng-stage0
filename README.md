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
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/NestJS"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}
