from pathlib import Path
import requests
import json

import flask
from flask.json import jsonify


def return_json(path):
    FILE_TO_UPLOAD_PATH = Path(path)

    url = "https://resume-parser.affinda.com/public/api/v1/documents/"

    with open("token.key", 'wb') as api_token:
        token = encryption_key.read()

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

    return response.json()

    import flask


app = flask.Flask(__name__)


@app.route('/uploadDoc', methods=['POST'])
def getResume():
    if (request.method == 'POST'):
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files['file']
        if file:
            file.save(os.path.join(file.file_name))
            return return_json(file.path)


app.run(host="0.0.0.0", port=8094)
