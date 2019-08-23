console.log(React)
function getMood(){
    const moods = [ 'Angry', 'Happy', 'Quiet', 'Upset'];
    return moods[Math.floor(Math.random()* moods.length)];
}

class JSXDemo extends React.Component {
    
    render() {
        return (
            <div>
                <h1>My image</h1>
                <h1>Current mood is : {getMood()}</h1>
                <h2> My number is: {2 * 8.4} </h2>
                <img src="https://images.unsplash.com/photo-1565775501514-4db91a79ee67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));