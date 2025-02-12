import React from 'react'

// function Greet(){
//     return <h1>Hello, World!</h1>;
// }

//function
// const Greet = (props)=>{ 
//     console.log(props)
//     return(
//         <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}!</h1>
//         {props.children}
//         </div>
//     ) 
// }

//destructuring the props
const Greet = (props)=>{
    const {name,heroName}=props;
    return(
        <div>
        <h1>Hello {name} a.k.a {heroName}!</h1>
        </div>
    ) 
}
export default Greet;