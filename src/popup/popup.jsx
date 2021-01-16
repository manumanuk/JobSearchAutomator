import React, {Component} from "react"


class Popup extends Component{
    state={}
    render(){
        return (
          <div className="App">
            <header className="header text">Turn Off
                <label className="switch">
                  <input
                    type="checkbox"
                    className="switch button"
                    name="turnOff"
                    onChange={this.turnOff}
                  />
                  <span className="slider round"></span>
                </label>
            </header>
            <a href="/options.html" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary" >Options</button>
            </a>
            <hr></hr>
            <footer className="popup footer">Powered by Jobbers <img src="./public/img/icon-48.png" alt=""></img></footer>
          </div>
        )
      }
      
}


export default Popup