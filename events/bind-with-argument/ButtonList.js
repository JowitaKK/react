import React, { Component } from 'react'

class ButtonList extends Component {
    static defaultProps = {
        colors : ["red", "blue", "green"]

    };
    constructor(props) {
        super(props);
        this.state = {color: "red" };
    }

    changeColor(newColor) {
        this.setState({ color: newColor});
        
    }

    render() {
        return (
            <div className = 'ButtonList' style=({backgroundColor: this.state.color })>
            {this.props.colors.map(c => {
                const colorObj = {backgroundColor: c};
                return(
                    <button style={colorObj} onClick={() => this.changeColor(c)}>
                        Click on me!
                    </button>
                );
            })}
            
            </div>
        );
    }
}
export default ButtonList;