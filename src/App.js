import React, { Component } from 'react';
import firebase from 'firebase';

import FileUpload from './FileUpload';
import Profile from './Profile';
import Wall from './Wall';

import './App.css';
import './fest.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      user:null
    };
    this.handleAuth = this.handleAuth.bind(this);
    
  }

  componentWillMount (){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      
    });
  }

  handleAuth(){
    const provider= new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  
  renderLoginButton(){
    if (this.state.user) {
    return (
        <div >
          <Profile Onuser={this.state.user} />
          <FileUpload Onuser={this.state.user}/>
          <Wall />
          <section id="footer">          
            <p class="copyright">&copy; <a href="#">VIRTUAL FEST</a></p>
          </section>
        </div>
      );
    }else{
      return (
        <div className="App-login"> 
          <img width="250" src="f-logo.png" alt=""/> 
          <br/>
          <a onClick={this.handleAuth}>Iniciar con google</a>
            
        </div>
      );
    }
  }
  render() {
    return (
      <div className="App">
        
          {this.renderLoginButton()}    
       
      </div>
    );
  }
}



export default App;
