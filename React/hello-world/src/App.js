import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
        <Message/>
        {/* functional props */}
        <Greet name="Bruce" heroName="Batman" >
          <p>This is a child props </p></Greet> 
        <Greet name="Kent" heroName="Superman">
          <button>Action</button>
          </Greet> 
        <Greet name ="Diana" heroName="Wonder Woman"/> 

        {/* Class props */}
        <Welcome name="Bruce" heroName="Batman"  /> 
        <Welcome name="Kent" heroName="Superman"  /> 
        <Welcome name="Diana" heroName="Wonder Woman"  /> 
    </div>
  );
}

export default App;
