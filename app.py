import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='ui/build/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/checkin/<projectname>/<qty>')
def checkIn_hardware(projectname, qty):
    return str(qty) + " was checked in to " + str(projectname)

@app.route('/checkout/<projectname>/<qty>')
def checkOut_hardware(projectname, qty):
    return str(qty) + " was checked out to " + str(projectname)

@app.route('/join/<projectname>')
def joinProject(projectname):
    return "Sanjay Gorur joined " + str(projectname)

@app.route('/leave/<projectname>')
def leaveProject(projectname):
    return "Sanjay Gorur left " + str(projectname)
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))