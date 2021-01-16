import React, {Component} from "react"


class Popup extends Component{
  constructor(){
    super()
    this.state={
      isOff: false
    }
    this.turnOff = this.turnOff.bind(this)
}

turnOff(){
  this.setState(prevState => {
    return{
        isOff: !prevState.isOff
    }
  })
}

    render(){
        return (
          <div className="App">
            <header>{this.state.isOff ? "Turn Off" : "Turn On"}
                <label className="switch">
                  <input
                    type="checkbox"
                    name="turnOff"
                    onChange={this.turnOff}
                  />
                  <span className="slider round"></span>
                </label>
            </header>
            <a href="/options.html" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary" >Options</button>
            </a>
          </div>
        )
      }
      
}


export default Popup