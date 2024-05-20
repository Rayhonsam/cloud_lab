from flask import Flask, render_template, request
import dropbox
import os

app = Flask(__name__)

dropbox_access_token = "sl.B1lFfqx3HIxzLDy6RI3qcPciyANSegh5EYTA-jdfSrc0YlyyqLKOUUOAP4eX6NpZvRi8334WAJvRzzAgv66fKKm8xnhJoFjymlPFsT1CQG4Fu2nDZ2QuFmxWklE1iSJ--vo5qYZiHK-l5UI"
dbx = dropbox.Dropbox(dropbox_access_token)

@app.route('/')
def index():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return "No file part"
    file = request.files['file']
    if file.filename == '':
        return "No selected file"
    filename = file.filename
    print(filename)
    temp_file_path = r"E:\bio-info" + filename
    file.save(temp_file_path)
    dropbox_path = "/image/"+filename

    with open(temp_file_path, "rb") as f:
        dbx.files_upload(f.read(), dropbox_path)

    os.remove(temp_file_path)

    return "File uploaded successfully"


if __name__ == '__main__':
    app.run(debug=True)