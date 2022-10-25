import React, { Component} from 'react';
import "./Project.css";
import { Button } from '@mui/material';
import Set from './Set';

export class Project extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            count: props.count,
            set: 1
        }
    }

    render () {
        return (
            <div class='Project'>
                <p> Project Name {this.state.count} </p>
                <Set one = {String(this.state.count + ":" + this.state.set)} 
                     two = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                     three = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                     four = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set+ ":" + this.state.count + ":" + this.state.set)}
                     set={this.state.set++}
                     name = {String("ProjectName" + this.state.count)}/>
                <Set one = {String(this.state.count + ":" + this.state.set)} 
                     two = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                     three = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                     four = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set+ ":" + this.state.count + ":" + this.state.set)}
                     set={this.state.set++}
                     name = {String("ProjectName" + this.state.count)}/>
                <Button id='join'>Join</Button>
            </div>
        )
    }
}

export default Project