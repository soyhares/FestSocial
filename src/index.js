import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyCisFeotd4lpuuk0y9hH4AuAyNFifUcbPc",
    authDomain: "fest-eb590.firebaseapp.com",
    databaseURL: "https://fest-eb590.firebaseio.com",
    projectId: "fest-eb590",
    storageBucket: "fest-eb590.appspot.com",
    messagingSenderId: "32295814837"
});
	

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
