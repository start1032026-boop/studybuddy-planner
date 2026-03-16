from fastapi import FastAPI

app = FastAPI()

@app.post("/generate-plan")
def generate_plan(data: dict):
    subjects = data["subjects"]
    
    plan = {
        "Monday": subjects,
        "Tuesday": subjects
    }

    return {"plan": plan}