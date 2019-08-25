import React, {Component} from 'react';
const POKE_API = 'https://pokeres.bastionbot.org/images/pokemon/';


class Pokecard extends Component {
    render(){
        let imgSrc =  `${POKE_API}${this.props.id}.png `;
        // let imgSrc = POKE_API + this.props.id + ".png";
        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src= {imgSrc} alt={this.props.name}/>
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        )
    }

}

export default Pokecard; 