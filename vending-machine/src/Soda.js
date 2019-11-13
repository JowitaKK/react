import React, { Component } from 'react';
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import Message from "./Message";
import "./Soda.css";

class Soda extends Component {
    render() {
        return (
            <div className = 'Soda'>
                <img src={sodaImg} alt= 'fanta can'/>
                <Message>
                    <h1>Fanta is my favorite</h1>
                    <h3>But I need to swap it for water</h3>
                    <link to= '/'> Go back</link>
                </Message>
                <img src={sodaImg} alt= 'fanta can' />
            </div>
        );

    }
}
export default Soda;