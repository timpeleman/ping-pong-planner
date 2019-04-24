import React, { Component } from 'react';
import Register from './components/users/Register/Registers';
import './App.css';

class PingPongPlanner extends Component{
  state= {
    profilePic:"",
    username:"",
    password:"",
    email:"",
    confirmPassword:"",
    validationOke: false

  }
  confirmationHandler= () =>{
    if(this.state.email.length > 0 && this.state.password.length > 0 && this.state.password === this.state.confirmPassword){
      alert('You have registered!')
      this.setState({
        validationOke: true
      })
    } else if (this.state.email.length > 0 && this.state.password.length > 0 && this.state.password !== this.state.confirmPassword){
        alert('You passwords don/t match')
    } else {
      alert('Check your username/email')
    }
    }
  

  createUsernameHandler =(event) => {
    
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render(){
    
  
  
    return (
    <div>
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
