import React, {Component} from "react";

//class
class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName} to the page!</h1>
    }
}
//destructuring the class
// class Welcome extends Component{
//     render(){
//         const {name, heroName}= this.props
//         return <h1>Welcome {name} a.k.a. {heroName} to the page!</h1>
//     }
// }

export default Welcome;