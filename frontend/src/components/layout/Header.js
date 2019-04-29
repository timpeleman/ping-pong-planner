import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
                <nav>
                    <ul>
                        <li>
                            <Link to="../users/Profilepage'">profile</Link>
                        </li>
                        <li>
                            <Link to="../Calendar/CalendarPage">calendar</Link>
                        </li>
                        <li>
                        <Link to="/">delete</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;