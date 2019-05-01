import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style/Header.css';

// COMPONENTS
import Navbar from './Navbar';
import Welcome from '../welcome/Welcome';

// ASSETS
import logo from '../../assets/mini-logo-vector-720x340.png';



class Header extends Component {
    render() {
        return(
            <header id="header">
                <Link to="/" component={Welcome}>
                    <img src={logo} id="nav-logo"/>
                </Link>
               <Navbar/>
            </header>
        )
    }
}

export default Header;