import React from 'react';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {


  state = {
    data:[],
    firstName: "",
    lastName: ""

  }

  componentDidMount =() => {
    fetch("http://api.icndb.com/jokes/random")
    .then(response => response.json())
    .then( json => this.setState({data:json.value.joke}))
  }

  jokesHandler=() => {
    if(this.state.firstname !== "" && this.state.lastname !== ""){
      fetch(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
    .then(response => response.json())
    .then( json => this.setState({data:json.value.joke}))
    }
    else {
    fetch("http://api.icndb.com/jokes/random")
    .then(response => response.json())
    .then( json => this.setState({data:json.value.joke}))
  }
}


  recordfirstName =(event) =>{
    this.setState({
      firstName: event.target.value
    })
  }

  recordlastName =(event) =>{
    this.setState({
      lastName: event.target.value
    })
  }

render () {

  console.log("inside render")
  
  return (
    <div className="App">
      <p>{this.state.data}</p>

      <button onClick={this.jokesHandler}>change </button>

      <input onChange ={this.recordfirstName}></input>
      <input onChange ={this.recordlastName}></input>
      
    </div>
  );
}
}

export default App;
