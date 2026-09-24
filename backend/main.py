from pdf_reader import extract_text_from_pdf
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "MoleKula backend is alive!"}


@app.get("/api/test")
def test_connection():
    return {"message": "Frontend and backend are connected!"}


@app.post("/api/upload")
async def upload_course_material(file: UploadFile = File(...)):
    file_contents = await file.read()

    with open(file.filename, "wb") as saved_file:
        saved_file.write(file_contents)

    extracted_text = extract_text_from_pdf(file.filename)

    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "message": "Course material received and read!",
        "text_preview": extracted_text["pages"][:3],
        "total_pages": extracted_text["total_pages"],
        "pages_with_text": extracted_text["pages_with_text"],
        "pages_without_text": extracted_text["pages_without_text"],
    }