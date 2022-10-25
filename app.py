from flask import Flask
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/checkin/<projectid>/<qty>')
def checkIn_hardware(projectid, qty):
    return '{qty} hardware checked in to {projectid}'.format(qty=qty, projectid=projectid)

@app.route('/checkout/<projectid>/<qty>')
def checkOut_hardware(projectid,qty):
    return '{qty} hardware checked out to {projectid}'.format(qty=qty, projectid=projectid)

@app.route('/join/<projectid>')
def joinProject(projectid):
    return 'Joined {projectid}'.format(projectid=projectid)

@app.route('/leave/<projectid>')
def leaveProject(projectid):
     return 'Leaved {projectid}'.format(projectid=projectid)

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))