import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
class FileUpload extends Component{

	constructor(props) {
		super(props);
		this.state = {
			picture:null,
			description:null
		};
		this.handleUploadPic = this.handleUploadPic.bind(this);	
		this.updateInputValue = this.updateInputValue.bind(this);
		this.eventUp = this.eventUp.bind(this);
	}

	componentWillMount (){
	   
	}

	handleUploadPic(event){
		const file = event.target.files[0];
		const storageRef = firebase.storage().ref(`events/photos/${file.name}`);
		const task=storageRef.put(file);

		task.on('state_changed',snapshot =>{
		this.setState({
				picture:task.snapshot.downloadURL
			});
		},error =>{
			console.log(error.message)
		});
	}

	

	 eventUp(){	 	
	 	const record={
	        photoUser:this.props.Onuser.photoURL,
	        username:this.props.Onuser.displayName,
	        img:this.state.picture,
	        description:this.state.description
	      };
	    if(record.img !== null){
	    	const dbRef = firebase.database().ref('events');
		    const newEvent = dbRef.push();
		    newEvent.set(record);
		   
	    }  
	 	
	    this.setState({
	      	picture:null,
			description:''
	    });

	     console.log(record);
	 }

	updateInputValue(evt) {
	    this.setState({
	      description: evt.target.value
	    });
	  }

	render() {
		return(
			<div className="post">
				
				<textarea height="200" placeholder="Descripcion..." value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></textarea>
				<br/>
				<label className="filebutton" >
				  <span >
				    <input type="file"  accept="image/x-png, image/gif, image/jpeg"  id="myfile" name="myfile" onChange={this.handleUploadPic} />
				  </span>
				</label>
				<img width="180" src={this.state.picture} alt=""/>
				<br/>
								
				<button onClick={this.eventUp} >Publicar</button>
			</div>
		);
	};
};

export default FileUpload;