import React, { Component } from 'react';
import axios from "axios";
const API_BASE_URL ="https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {deck: null, drawn: [] };
        this.getCrd = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({ deck: deck.data})
    }
    async getCard() {
        let deck_id= this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if(!cardRes.data.success) {
                throw new Error ("No card remaining");
            }
            let card = cardRes.data.cards[0]
        }

    }
    reneder() {
        return (
            <div>
                <h1> Card Dealer</h1>

            </div>
        )
    }

}

export default Deck;