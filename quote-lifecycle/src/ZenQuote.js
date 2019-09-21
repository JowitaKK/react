import React, { Component } from 'react'
import axios from 'axios';
import './ZenQuote.css';

class ZenQuite extends Component {
    constructor(props) {
        super(props);
        this.state= {quote: "", isLoaded: false};
        axios.get("https://api.github.com/zen").then(response => {
            this.setState({quote: response.data });
    });
    }
    componentDidMount() {
        //load data
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function() {
                this.setState({quote: response.data, isLoaded: true});
                }.bind(this),
                3000
            );
        });
        //set state with that data
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? ( 
                <div>
                    <h1> Always remember ...</h1>
                    <p>{this.state.quote} </p>
                </div>
                ) : (
                 <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
            </div>
        );
    }

}
export default ZenQuite;