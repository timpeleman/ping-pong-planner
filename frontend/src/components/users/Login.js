import React, { Component } from 'react';
import './style/Login.css';
import { Link } from 'react-router-dom';

// + IMAGES
import test from '../../assets/test.jpg';
import logo from '../../assets/mini-logo-vector-720x340.png';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
  }

  //connect front end and back end

  callApi = async () => {
    const response = await fetch('/api/users/login');
    const body = await response.json();
    if (response.status !== 200) {
      console.log('something went wrong');
    }
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    });
  };

  render() {
    return (
      <div id="login">
        <img src={test} alt="gifDesk" id="gifDesk" />
        <form onSubmit={this.onSubmit} id="loginForm">
          <img src={logo} alt="logo" id="logo" />
          <input
            id="emailInputLogin"
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            id="passwordInputLogin"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <input id="loginBTN" type="submit" value="login" />

          <div className="line" />
          <Link to="/Register" id="regBTN">
            register
          </Link>
        </form>
      </div>
    );
  }
}
