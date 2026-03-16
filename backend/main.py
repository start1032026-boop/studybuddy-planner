from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StudyInput(BaseModel):
    subjects: list[str]
    hours_per_day: int

@app.post("/generate-plan")
def generate_plan(data: StudyInput):

    plan = {
        "Monday": data.subjects[:2],
        "Tuesday": data.subjects[::-1][:2]
    }

    return {"plan": plan}