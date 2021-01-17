from pathlib import Path
import requests
import json

import flask
from flask.json import jsonify
from flask import request, redirect
import os


def return_json(path):
    FILE_TO_UPLOAD_PATH = Path(path)

    url = "https://resume-parser.affinda.com/public/api/v1/documents/"

    with open("token.key", 'rb') as api_token:
        token = api_token.readline().decode().strip()
    headers = {"Authorization": f"Bearer {token}"}

    with open(FILE_TO_UPLOAD_PATH, "rb") as doc_file:
        response = requests.post(
            url,
            data={"file_name": FILE_TO_UPLOAD_PATH},
            files={"file": doc_file},
            headers=headers,
        )
    print(response.json())

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

    return response.json()

    import flask


app = flask.Flask(__name__)


@app.route('/uploadDoc', methods=['POST'])
def getResume():
    print(request.files)
    if (request.method == 'POST'):
        if 'file' not in request.files:
            return "Error"
        file = request.files['file']

        if file:
            file.save(os.path.join(file.filename))
            return return_json(file.filename)


app.run(host="0.0.0.0", port=8094)
