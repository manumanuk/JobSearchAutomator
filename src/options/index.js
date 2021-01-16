import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options';
import Firebase from '../firebase';


var firebaseClass = new Firebase();


ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById('options')
);
