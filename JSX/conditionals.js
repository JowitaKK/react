function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return(
            <div>
                <h1> Your num is: {num}</h1>
                <p>{num === 7 ? 'Congratulation': 'Unlucky'}</p>
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
//                 { num === 7 && 
//                 < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVMtcwmzgGaCpjvr44mCu8uqh0EFzbEXlV2GfVxvWCYgFzpuE"/>
//                 }
//             </div>
//         );
//     }
// }