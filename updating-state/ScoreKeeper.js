import React, { Component } from 'react'

classstoreKeeper extends Component {
    constructor(props){
        super(props);
        this.state = { score: 0};
        this.singleKill= this.singleKill.bind(this);
        this.tripleKill=this.tripleKill.bind(this);

    }
    singleKill() {
        this.setState({ score: this.state.score +1});
    }
    // tripleKill(){
    //     this.setState(st => {
    //         return { score: st.score + 1}
    //     });
    //     this.setState(st => {
    //         return { score: st.score + 1}
    //     });
    //     this.setState(st => {
    //         return { score: st.score + 1}
    //     });

    // }

    incrementScore(curState) {
        return { score: curState.score + 1 };
    }
    tripleKill {
        this.setState(incrementScore);
        this.setState(incrementScore);
        this.setState(incrementScore);
    }

    
    render() {
        return (
            <div>  
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}></button>
                <button onClick={this.tripleKill}></button>
            </div>
        );
    }

}
export default ScoreKeeper;