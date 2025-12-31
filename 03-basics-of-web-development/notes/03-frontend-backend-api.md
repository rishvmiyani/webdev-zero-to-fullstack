# 03. Frontend, Backend & APIs 

## 🎭 Roles Defined

| Layer        | Responsibility     | Technologies                          |
|--------------|--------------------|---------------------------------------|
| **Frontend** | User Interface     | HTML, CSS, JavaScript, React, Tailwind|
| **Backend**  | Business Logic     | Node.js, Express, Python, Django      |
| **Database** | Data Storage       | MongoDB, PostgreSQL, Redis            |
| **API**      | Communication      | REST, GraphQL, WebSockets             |

🔌 How They Talk (API)

An API (Application Programming Interface) acts as a bridge between the frontend and backend.
The frontend never talks to the database directly — all communication happens through APIs.

🔄 Communication Flow
User Action (Click / Submit)
        ↓
Frontend (Browser / React App)
        ↓  HTTP Request (JSON)
Backend (Server / API Layer)
        ↓
Database (Store / Fetch Data)
        ↑
Backend (Process Response)
        ↑  HTTP Response (JSON)
Frontend (Update UI)

📤 API Request Example (Frontend → Backend)
POST /api/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "123456"
}

📥 API Response Example (Backend → Frontend)
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": 1,
    "name": "Rishv"
  }
}