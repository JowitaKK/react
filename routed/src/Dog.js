import React, { Component } from 'react'

class Dog extends Component {
    componentDidMount() {
        console.log("Dog did mount");
    
    }
    componentWillMount() {
        console.log("Dog will unmount");
    }
    render() {
        console.log("Dog render");
        return (
            <div className = 'Dog'>
                <h1> Dog</h1>
                <h3>This dog  is named: {this.props.name} </h3>
                <img src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1164&q=80' />

            </div>

        )
    }
}
export default Dog;