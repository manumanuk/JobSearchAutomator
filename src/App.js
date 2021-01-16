import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"


class App extends Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return (
      <div className="App">
        <header>This is my Header <button>Turn Off</button></header>
        <button>Hello Sahil + Soumav</button>
      </div>
    );
  }
}

export default App;
