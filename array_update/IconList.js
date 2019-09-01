import React, { Component } from 'react'

class IconList extends Component {
    static defaultProps = {
        options: [
            "angry",
            "archive",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city"

        ]
    };
    constructor(props) {
        super(props);
        this.state = { icons: [] };
        this.addIcon = this.addIcon.bind(this);

    }
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.optios.length);
        let newIcon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcon]});
        
    }
    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
        return (
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        );
    
    }


}
export default IconList;