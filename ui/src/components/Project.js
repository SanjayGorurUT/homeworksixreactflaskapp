import React, { Component} from 'react';
import "./Project.css";
import { Button } from '@mui/material';
import { Set } from './Set';

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
                <Set set={this.state.set++}/>
                <Set set={this.state.set++}/>
                <Button id='join'>Join</Button>
            </div>
        )
    }
}

export default Project