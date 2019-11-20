import React from 'react';

class CarInfo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            likes: 0
        };
        this.handleMinus = this.handleMinus.bind(this)
    }

    handlePlus = () => this.setState({
        likes: this.state.likes + 1
    })

    handleMinus() {
        this.setState({
            likes: this.state.likes - 1
        })
    } 

    render() {
        return (
            <div> 
                Car Info: {this.props.id} - {this.props.model} 
                <img src={this.props.img} alt="img text"></img>

                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={() => this.setState({likes: 0})}>Reset</button>
                {this.state.likes}
            </div>
        )
    }
}


export default CarInfo