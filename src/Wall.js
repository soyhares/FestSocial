import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import './fest.css';
class Wall extends Component {
  constructor(props){
    super(props);
    this.state = {
      events:[]
    };
  }

  componentWillMount (){
    firebase.database().ref('events').on('child_added',snapshot =>{
      this.setState({
        events:this.state.events.concat(snapshot.val()).reverse()
      });
    })
  }

  render() {

    return (
      <div className="">
         {
          this.state.events.map(event =>(
      
                 <div className="post">
                   <div className="App-event-header">
                     <img src={event.photoUser} alt=""/>
                     <span>{event.username}</span>
                    </div> 
                   <div className="image featured">
                     <img src={event.img} alt="" />
                     <br/>
                     <p >{event.description}</p>
                   </div>
                   <center>
                    <button >UNIRSE</button>
                    <button>Me encanta</button>
                    <button>Comentar</button>
                    </center>
           
                 </div>
           
            ))
         }
         
      
      </div>
    );
  }
}



export default Wall;
