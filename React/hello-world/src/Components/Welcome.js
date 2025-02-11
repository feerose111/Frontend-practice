import React, {Component} from "react";

//c
class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName} to the page!</h1>
    }
}

export default Welcome;