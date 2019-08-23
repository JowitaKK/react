class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                name= "Jow"
                hobbies={['Books','Singing','Dancing']}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))