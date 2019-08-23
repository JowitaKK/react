function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return(
            <div>
                <h1> Your num is: {num}</h1>
                <p>{num === 7 ? 'Congratulation': 'Unlucky'}</p>  // yes or no alternative operator
                { num === 7 && 
                < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVMtcwmzgGaCpjvr44mCu8uqh0EFzbEXlV2GfVxvWCYgFzpuE"/>
                }
            </div>
        );
    }
}

ReactDOM.render(<NumPicker/> , document.getElementById('root'));

// or 
// class NumPicker extends React.Component {
//     render() {
//         const num = getNum();
//         let msg;
//         
//         return(
//             <div>
//                 <h1> Your num is: {num}</h1>
//                 <p>{num === 7 ? 'Congratulation': 'Unlucky'}</p>
//                 { num === 7 
//                   ? < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVMtcwmzgGaCpjvr44mCu8uqh0EFzbEXlV2GfVxvWCYgFzpuE"/>
//                   : null             PAMIETAJ O PYTAJNIKU I O WARTOSCI NULL- JESLI NIE JEST === 7 TO OBRAZKA NI MA
//                  }
//             </div>
//         );
//     }
// }


//========================================================= 
/* with conditionals 
class NumPicker extends React.components {
    render() {
        const num = getNum();
        let msg;    //variable
        if (num === 7) {
            msg =
            <div>
                <h2>CONGRATULATION YOU WIN </h2>
                < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVMtcwmzgGaCpjvr44mCu8uqh0EFzbEXlV2GfVxvWCYgFzpuE"/>
            </div>
        } else {
            msg =  <p> Sorry You Lose! </p>
        }
        return (
            <div>
             <h1> Your number is: {num} </h1>
             {msg}
             </div>

        );
    }
}
*/