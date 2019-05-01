import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// COMPONENTS
import Navbar from './Navbar';

// ASSETS
import logo from '../../assets/mini-logo-vector-720x340.png';



class Header extends Component {
    render() {
        return(
            <div>
                <a>
                    <img src={logo}/>
                    <Link to="/">HOME</Link>
                </a>
                <Navbar/>
            </div>
        )
    }
}

export default Header;