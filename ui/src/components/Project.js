import React from 'react'
import Button from '@mui/material/Button';
import Set from './Set';

class Project extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            users: props.users,
            username: props.userName,
            userProject: false,
            HWSetAvailability: props.HWSetAvailability,
            HWSetCapacity: props.HWSetCapacity,
            handler: props.handler
        };
    
    }

    arrayRemove(arr, value) { 
    
        return arr.filter(function(e){ 
            return e != value; 
        });
    }

    addToUsers(){
        var usersArray = this.state.users;
        if(this.state.userProject){
            usersArray = this.arrayRemove(usersArray,this.state.username)
            fetch(`/leave/${this.state.name}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
        }
        else{
            fetch(`/join/${this.state.name}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
            usersArray.push(this.state.username);
        }
        this.setState({users:usersArray});
        this.setState({userProject: !this.state.userProject})
    }
    render(){
        // console.log(this.state.HWSetAvailability)
        return(
            <div className="project">
                <div className="projectContainer">
                    <h3>{this.state.name}</h3>
        
                    <h5>Users: <span>{this.state.users.join(", ")}</span></h5>
                    <Button className="userButton" variant="contained" onClick={() => this.addToUsers()}>{this.state.userProject ? "LEAVE" : "JOIN"}</Button>
                    <div className="HWSetListing">
                        <Set name="HWSet1" available={this.state.HWSetAvailability[0]} capacity={this.state.HWSetCapacity[0]} handler={this.state.handler}></Set>
                        <Set name="HWSet2" available={this.state.HWSetAvailability[1]} capacity={this.state.HWSetCapacity[1]} handler={this.state.handler}></Set>
                    </div>
                </div>
            </div>
        );
    }

  
}

export default Project