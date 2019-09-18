import React, { Component } from 'react'
import './Dice.css';
import Die from './Die';

class Dice extends Component {
    render() {
        return (
            <div className='Dice'> 
            {this.props.dice.map((d, idx) => (
            <Die 
                handleClick={this.props.handleClick}
                val={d}
                locked={this.props.locked[idx]}
                idx={idx}
                key={idx}
                disabled={this.props.disabled}
                rolling={this.props.rolling && !this.props.locked[idx]}
                />
            ))}
            </div>
        );
    }
}
export default Dice;