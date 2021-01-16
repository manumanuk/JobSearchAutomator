import './App.css';
import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "./popup/popup"

class App extends Component{
  constructor(){
    super()
    this.state={
      isOff: false,
    }
    this.turnOff = this.turnOff.bind(this)
  }

  turnOff(){
    this.setState(prevState =>{
      return{
        isOff: !prevState.isOff
      }
    })
    console.log("hello")
  }
  render(){
    return(
      <Popup />
    )
  }


}

export default App;
