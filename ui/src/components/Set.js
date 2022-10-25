import React, {Component} from 'react';
import {Button, TextField} from "@mui/material";
import "./Set.css";

export class Set extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            set: props.set,
            amount: 0
        }
    }

    render () {
        return (
            <div class='Set'>
                <p id='setAmount'>HWSet{this.props.set}: {this.state.amount}/100</p>
                <TextField id='amount' placeholder='Enter qty'></TextField>
                <Button id='add' onClick={updateCheckIn}>Check In</Button>
                <Button id='remove' onClick={updateCheckOut}>Check Out</Button>
                <br></br>
            </div>
        )
    }
}

    function updateCheckIn(set, amount) {
        let added = parseInt(document.getElementById("setAmount").innerHTML);
        amount += added;
        if(amount > 100)
        {
            amount = 100;
        }
        document.getElementById("setAmount").innerHTML = "HWSet" + parseInt(set) + ": " + parseInt(amount) + "/100";
    }
    
    function updateCheckOut(set, amount) {
        let removed = parseInt(document.getElementById("amount").innerHTML);
        amount -= removed;
        if(amount < 0)
        {
            amount = 0;
        }
        document.getElementById("setAmount").innerHTML = "HWSet" + parseInt(set) + ": " + parseInt(amount) + "/100";
    }

export default Set