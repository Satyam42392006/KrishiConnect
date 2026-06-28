# KrishiConnect

## Full-Stack Agricultural Services Platform

This project consists of a Frontend (Next.js + Tailwind) and a Backend (FastAPI), providing a complete agricultural services solution.

---

## 🌟 Swagger UI - Interactive API Documentation

FastAPI includes **Swagger UI** automatically! You can access the interactive API documentation at:

- **Swagger UI:** http://localhost:5000/docs (interactive API testing)
- **ReDoc:** http://localhost:5000/redoc (clean API documentation)
- **OpenAPI JSON:** http://localhost:5000/openapi.json

Swagger UI lets you test all API endpoints directly in your browser!

---

## 🚀 How to Run Locally

### 1. Backend Setup (FastAPI)

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment (Windows)
python -m venv venv
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run backend server
python main.py
```

Backend will run at **http://localhost:5000**

### 2. Frontend Setup (Next.js)

```bash
# Navigate to project root (if not already there)
cd ..

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend will run at **http://localhost:3000** (or next available port like 3001)

---

## 📡 API Endpoints

The backend provides these RESTful API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | Get all services |
| GET | `/api/services/{id}` | Get service by ID |
| POST | `/api/services` | Create new service |
| PUT | `/api/services/{id}` | Update service by ID |
| DELETE | `/api/services/{id}` | Delete service by ID |
| GET | `/api/services/search/` | Search services (use `?q=query`) |

---

## 🛠️ Technologies

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** FastAPI, Pydantic, Uvicorn
- **Other:** CORS, REST API, Swagger UI

---

## 📱 Features

- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Interactive API documentation with Swagger UI
- ✅ Complete CRUD operations for services
- ✅ Search functionality
- ✅ Loading and error states with toasts
