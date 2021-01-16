import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      isOff: false
    }
    this.turnOff = this.turnOff.bind(this)

  }

  turnOff(){

  }



  render(){
    return (
      <div className="App">
        <header>This is my Header
            <label>
              <input
                type="checkbox"
                name="turnOff"
                onChange={this.turnOff}
                checked={this.state.isOff}
              />
            </label>
          <button>Turn Off</button>
        </header>
        <button>Hello Sahil + Soumav</button>
      </div>
    );
  }
}

export default App;
