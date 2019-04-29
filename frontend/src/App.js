import React, { Component } from 'react';
import Register from './components/users/Register/Registers';
import ProfilePage from './components/users/Profilepage/Profilepage';
import './App.css';

class PingPongPlanner extends Component{
  state= {
    // register state
    profilePic:"",
    username:"",
    password:"",
    email:"",
    confirmPassword:"",
    validationOke: false,
    //Profife page state
    gamesPlayed:"",
    gamesWon:""

  }
  //Register functions
  confirmationHandler= () =>{
    if(this.state.email.length > 4 && this.state.email.length < 10 && this.state.password.length > 0 && this.state.password.length < 10 && this.state.password === this.state.confirmPassword){
      alert('You have registered!')
      this.setState({
        validationOke: true
      })
    } else if (this.state.email.length > 0 && this.state.password.length > 0 && this.state.password !== this.state.confirmPassword){
        alert('You passwords don/t match')
    } else if ( this.state.password.length > 10 && this.state.password.length > 0){
      alert('Password should be between 4-10 characters')
    }
    else {
      alert('Check your username/email')
    }
    }
  

  createUsernameHandler =(event) => {
    
    this.setState({
      [event.target.id]: event.target.value
    });
  }

uploadProfilepicHandler =() =>{
  
}


// Profile page 


  render(){
    
  
  
    return (
   <div className='flex-container'>
  <Register 
      changed={this.createUsernameHandler}
      profilePic={this.state.profilePic}
      username={this.state.username} 
      password={this.state.password} 
      email={this.state.email}
      confirmPassword={this.state.confirmPassword}
      submit={this.confirmationHandler}/>
      
    </div>
  
  );
}}

export default PingPongPlanner;
