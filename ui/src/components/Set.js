import React from 'react'
import Button from '@mui/material/Button';

class Set extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            usage: 0,
            availability: props.available,
            capacity: props.capacity,
            availabilityHandler: props.handler,
            tickerValue: 0
        };

        this.tickerChange = this.tickerChange.bind(this)
    
    }

    tickerChange(event){
        var value = parseInt(event.target.value)
        if(value != undefined){
            this.setState({tickerValue: value});
        }
    }
    render(){
        return(
            <div className='HWSet'>
                <h5>{this.state.name} ({this.state.usage}/{this.state.capacity} GB)</h5>
                <input type="range" min="0" max={this.state.availability.toString()} value={this.state.tickerValue} onChange={this.tickerChange} step="1"></input>
                <p>{this.state.tickerValue}</p>
                <Button className="userButton" variant="contained" onClick={this.checkOut.bind(this)}>+</Button>
                <Button className="userButton" variant="contained" onClick={this.checkIn.bind(this)}>-</Button>
            </div>
        )
    }

    checkOut(){
        if(this.state.availability != 0 && this.state.tickerValue <= this.state.availability){
            console.log(this.state.availability)
            this.setState({usage: this.state.usage + this.state.tickerValue})
            this.state.availabilityHandler({name: this.state.name, value: this.state.tickerValue})

            fetch(`/checkout/${this.state.name}/${this.state.tickerValue}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
              
        }
    }

    checkIn(){
        if(0 < this.state.tickerValue && this.state.tickerValue <= this.state.usage){
            console.log(this.state.availability)
            this.setState({usage: this.state.usage - this.state.tickerValue})
            this.state.availabilityHandler({name: this.state.name, value: -this.state.tickerValue})

            fetch(`/checkin/${this.state.name}/${this.state.tickerValue}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
        }
    }

}

export default Set