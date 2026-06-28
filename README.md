# KrishiConnect

## Full-Stack Application

This project consists of a Frontend (Next.js + Tailwind) and a Backend (FastAPI).

## Swagger UI

FastAPI includes **Swagger UI** by default! You can access the interactive API documentation at:
- **Swagger UI:** http://localhost:5000/docs
- **ReDoc:** http://localhost:5000/redoc

---

## How to Run Locally

### 1. Backend Setup
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
Backend will run at http://localhost:5000

---

### 2. Frontend Setup
```bash
# Navigate to project root (if not already there)
cd ..

# Install dependencies
npm install

# Run development server
npm run dev
```
Frontend will run at http://localhost:3000 (or next available port)
