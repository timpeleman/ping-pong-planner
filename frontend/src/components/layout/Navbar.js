import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// COMPONENTS
import WelcomePage from '../welcome/Welcome';
import ProfilePage from '../users/Profilepage';
import CalendarPage from '../Calendar/CalendarPage';

// ASSETS
import logo from '../../assets/mini-logo-vector-720x340.png';



class Navbar extends Component {
    render() {
        return(
        <Router>
            <div id="navbar">
                <a>
                <img src={logo} alt="logo" id="nav-logo"/>
                <Link to={'/'}>HOME</Link>
                </a>
                <nav className="nav">
                    <ul>
                        <li><Link to={'/Profilepage'}>profile</Link></li>
                        <li><Link to={'/CalendarPage'}>calendar</Link></li>
                        <li><Link to={'/'}>delete</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" Component={WelcomePage}/>
                    <Route exact path="/ProfilePage" Component={ProfilePage}/>
                    <Route exact path="/Calendar" Component={CalendarPage}/>
                </Switch>
            </div>
        </Router>
        )
    }
}

export default Navbar;