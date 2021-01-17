from pathlib import Path
import requests
import json


def return_json(path):
    FILE_TO_UPLOAD_PATH = Path(path)

    url = "https://resume-parser.affinda.com/public/api/v1/documents/"

    token = "9f9cc8a21bb32ad7e5e2036f919346c9863b71e1"

    headers = {"Authorization": f"Bearer {token}"}

    with open(FILE_TO_UPLOAD_PATH, "rb") as doc_file:
        response = requests.post(
            url,
            data={"file_name": FILE_TO_UPLOAD_PATH.name},
            files={"file": doc_file},
            headers=headers,
        )

    identifier = response.json()['identifier']

    url = f"https://resume-parser.affinda.com/public/api/v1/documents/{identifier}"

    headers = {"Authorization": f"Bearer {token}"}

    response = requests.get(url, headers=headers)

    with open(FILE_TO_UPLOAD_PATH, "rb") as doc_file:
        response = requests.post(
            url,
            files={"file": doc_file},
            headers=headers,
        )

    with open('/home/goodmanmcgee/JobSearchAutomator/parser/data.json', 'w') as outfile:
        json.dump(response.json(), outfile)

    return response.json()
