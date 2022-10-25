import React from 'react'
import Project from "./Project";

var defaultSetUsers = []


class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: [{"name": "Test1"},{"name": "Test2"},{"name": "Test3"},{"name": "Test4"}],
            availability: [100,100],
            capacity: [100,100]
        };

        this.changeAvailability = this.changeAvailability.bind(this)

    }

    changeAvailability(data){
        if(data.name == "HWSet1"){
            var a = this.state.availability
            a[0] = a[0] - data.value
            this.setState({availability: a})
        }
        else{
            var a = this.state.availability
            a[1] = data.value
            this.setState({availability: a})
        }

        console.log(this.state)
    }

    render(){
        return(
        <div>
            {
                this.state.projects.map(function(d,i){
                    return(<Project 
                        key={d.name} 
                        name={d.name} 
                        users={Array.from(defaultSetUsers)} 
                        userName="exampleUser" 
                        HWSetAvailability={this.state.availability} 
                        HWSetCapacity={this.state.capacity} 
                        handler={this.changeAvailability}>
                        </Project>)
                },this)
            }
        </div>
        );
    }
}

export default Projects