import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachine from "./VendingMachine.png";

class VendingMachine extends Component {
    render(){
        return(
            <div className = 'VendingMachine'
            style={{ backgroundImage: `url(${vendingMachine})`}}
            >
            <Message>
                <h1> What would You like to buy?</h1>
            </Message>
            <Message>
            <h1>
                <Link to= '/soda'>Soda</Link>
            </h1>
            <h1>
                <Link to= '/chips'>Chips</Link>
            </h1>
                <Link to= '/sardines'>sardines</Link>
                </Message>
            </div>
        );
    }
}
export default VendingMachine;
