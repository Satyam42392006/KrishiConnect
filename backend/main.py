from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

# Initialize FastAPI app
app = FastAPI(title="KrishiConnect API")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for Service
class Service(BaseModel):
    id: Optional[int] = None
    title: str
    description: str

# In-memory "database"
services_db: List[Service] = [
    Service(id=1, title="Crop Advisory", description="Expert advice on crop selection and cultivation"),
    Service(id=2, title="Weather Forecast", description="Real-time weather updates for farmers"),
    Service(id=3, title="Market Prices", description="Latest market prices for agricultural commodities")
]

# Counter for generating next ID
next_id: int = 4

# GET all services
@app.get("/api/services", response_model=List[Service])
def get_all_services():
    return services_db

# GET single service by ID
@app.get("/api/services/{service_id}", response_model=Service)
def get_service(service_id: int):
    for service in services_db:
        if service.id == service_id:
            return service
    raise HTTPException(status_code=404, detail="Service not found")

# POST create new service
@app.post("/api/services", response_model=Service, status_code=201)
def create_service(service: Service):
    global next_id
    new_service = Service(id=next_id, title=service.title, description=service.description)
    services_db.append(new_service)
    next_id += 1
    return new_service

# PUT update service
@app.put("/api/services/{service_id}", response_model=Service)
def update_service(service_id: int, updated_service: Service):
    for i, service in enumerate(services_db):
        if service.id == service_id:
            services_db[i] = Service(
                id=service_id,
                title=updated_service.title,
                description=updated_service.description
            )
            return services_db[i]
    raise HTTPException(status_code=404, detail="Service not found")

# DELETE service
@app.delete("/api/services/{service_id}", status_code=204)
def delete_service(service_id: int):
    for i, service in enumerate(services_db):
        if service.id == service_id:
            services_db.pop(i)
            return
    raise HTTPException(status_code=404, detail="Service not found")

# Search services
@app.get("/api/services/search/", response_model=List[Service])
def search_services(q: Optional[str] = None):
    if not q:
        return services_db
    return [s for s in services_db if q.lower() in s.title.lower() or q.lower() in s.description.lower()]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
