import React, {Component} from "react"


class Popup extends Component{
    state={}
    render(){
        return (
          <div className="App">
            <header>Turn Off App
                <label className="switch">
                  <input
                    type="checkbox"
                    name="turnOff"
                    onChange={this.turnOff}
                  />
                  <span className="slider round"></span>
                </label>
            </header>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" >
              <button className="btn btn-primary" >Options</button>
            </a>
          </div>
        )
      }

}


export default Popup