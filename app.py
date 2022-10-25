from flask import Flask
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/checkin/<projectname>/<qty>')
def checkIn_hardware(projectname, qty):
    return '{qty} hardware checked in to {projectname}'.format(qty=qty, projectname=projectname)

@app.route('/checkout/<projectname>/<qty>')
def checkOut_hardware(projectname,qty):
    return '{qty} hardware checked out to {projectname}'.format(qty=qty, projectname=projectname)

@app.route('/join/<projectname>')
def joinProject(projectname):
    return 'Joined {projectname}'.format(projectid=projectname)

@app.route('/leave/<projectname>')
def leaveProject(projectname):
     return 'Left {projectname}'.format(projectname=projectname)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))