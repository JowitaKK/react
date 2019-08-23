class Hello extends React.Component {
    render(){
        let bangs = "!".repeat(this.props.bangs); //this.props.bangs or by method
        return (
            <div>
              <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
              <img src={this.props.img}/>

            </div>
        );
    }

}

/* default value
class Hello extends React.Component{
    static defaultProps={
        from: 'Anonymous',
        bangs: 
    }
        render(){
        let bangs = "!".repeat(this.props.bangs); //this.props.bangs or by method
        return (
            <div>
              <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
              <img src={this.props.img}/>

            </div>
        );
    }
}
*/