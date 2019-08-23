class App extends React.Component {
    render() {
        return(
            <div>
                <Hello 
                to="Jov" 
                from= "Marcin"
                bangs={4}
//                num = {3}
//                data= {[1, 2, 3, 4, 5]}
                img ="https://vignette.wikia.nocookie.net/characters/images/8/8e/Owl_WTP.jpg/revision/latest?cb=20180215044643"
/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));