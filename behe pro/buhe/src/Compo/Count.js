import React  from 'react';
import './App.css';
import { Component } from 'react';

// function App() {
  // return (
    // <div className="App">
      
    // </div>
  // );
// }
class Count extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render(){

    return(
      <div className='App'>
        <h1>number:{this.state.count}</h1>
        <button color='red' onClick={()=>this.setState({count:this.state.count+1})}>Add</button>
        <button color='green' onClick={()=>this.setState({count:this.state.count-1})}>Reduce</button>


      </div>
    )
  }
}

export default Count;
