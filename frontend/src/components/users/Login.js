import React, { Component } from "react";
import './style/Login.css';

// images
import test from '../../assets/test.jpg';
import logo from '../../assets/mini-logo-vector-720x340.png';



export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: ""
        };
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        alert('Authentication coming soon!');
    }

    render() {
        return(
            <div id="login">
                <img src={test} alt="gifDesk" id="gifDesk"/>
                <form onSubmit={this.onSubmit} id="loginForm">
                    <img src={logo} alt="logo" id="logo"/>
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
                    <input 
                    id="loginBTN"
                    type="submit" 
                    value="login" 
                    />
                    <div className="line"></div>
                    <p id="regBTN"><a href="Register.js">register</a></p>
                </form>
            </div>
        )
    }
}