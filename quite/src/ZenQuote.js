import React, { Component } from 'react'
import axios from 'axios';

class ZenQuite extends Component {
    constructor(props) {
        super(props);
        this.state= {quote: ""};
        axios.get("https://api.github.com/zen").then(response => {
            this.setState({quote: response.data });
    });
    }
    componentDidMount() {
        //load data
        axios.get("https://api.github.com/zen").then(response => {
            this.setState({quote: response.data});
        });
        //set state woth that data
    }
    render() {
        return (
            <div>
                <h1> Always remember ...</h1>
                <p>{this.state.quote} </p>

            </div>
        );
    }

}
export default ZenQuite;