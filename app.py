from flask import Flask
from UserBackend import UserBackend
from ProjectBackend import ProjectBackend
from HardwareBackend import HardwareBackend

app = Flask(__name__)
    
@app.route('/users')
def users():
    return {"users": ["user1", "user2", "user3"]}

@app.route('/projects')
def projects():
    return "projects"

@app.route('/hwsets')
def hwsets():
    hardwareBackend = HardwareBackend()
    return "hwsets"

@app.route('/')
def hwsets():
    return ""

if __name__ == "__main__":
    app.run(debug=True)