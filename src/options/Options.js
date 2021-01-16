import logo from '../logo.svg';
import React, { Component } from 'react';
import './Options.css';
import firebase from 'firebase/app'
import 'firebase/database'
import databaseHelper from './databaseFunctions';

var dbhelper = new databaseHelper;

class Options extends Component {
  sendToFirebase()
  {
    //dbhelper.logFirebaseDb();
      //const databaseRef = firebase.database().ref('users');
      
      //console.log("hi");
      var data = {
        name : "asd",
        phoneNumber: 43
      }
      
      dbhelper.sendToFirestore(data);
      //bhelper.retrieveInfo();
  }

  /****Startup Callback on react****/
  componentDidMount()
  {
    console.log(firebase);
    
  }

  render()
  {
    return (
    <div className="App">
      <button type="button" onClick={this.sendToFirebase}>idk</button>
    </div>
    )
  }

  
}

export default Options;
