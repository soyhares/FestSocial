import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import './fest.css';
class Profile extends Component{
	constructor (props){
		super(props);
		
	    this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(){
	    firebase.auth().signOut()
	    .then(result => console.log(`${this.props.Onuser.displayName} ha salido!!`))
	    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
	  }
	render(){
		return (
			<div className="">	
				
			

				<div className="App-event-header ">
					<img  width="100" src={this.props.Onuser.photoURL} alt={this.props.Onuser.displayName}/>
					<span>{this.props.Onuser.displayName}</span>
				</div>	
				<button onClick={this.handleLogout}>Cerrar Sesión</button>			
			
			</div>
			);
	}
}

export default Profile;