from pathlib import Path


FILE_TO_UPLOAD_PATH = Path(
    "/home/goodmanmcgee/JobSearchAutomator/parser/Resume_V1.pdf")

with open(FILE_TO_UPLOAD_PATH, "rb") as doc_file:
    print(type(doc_file))
