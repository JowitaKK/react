import React, { Component } from 'react'

class NumberList extends Component {
    constructor(props){
        super(props);
        this.state= {
            nums: [1,2,3,4,5]
        this.remove = this.remove.bind(this);
        }
        remove(num) {
            this.setState (st => ({
                nums: st.nums.filter (n => n !== num)

            }));
        }
        this.render() {
            let nums = this.state.nums.map (n => <NumberItem value= {n} remove={this.remove}/>);
        return( 
            <div>
                <h1> First Numbel List</h1>
            </div>
        );
    }
}

export default NumberList;