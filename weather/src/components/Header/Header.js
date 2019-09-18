import './Header.css';
import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (

            <div className="container">
                <h2> Weather app</h2>
                <input type="text" name="Search" placeholder="Type city" />
                <button class="button">Green</button>

            </div>
        )

    }
}

export default Header;