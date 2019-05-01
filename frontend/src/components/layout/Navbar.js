import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Fragment from 'react-dom-fragment';
import './style/Header.css';

class Navbar extends Component {
    render() {
        return(
        <Fragment>
            <nav className="nav">
                <ul id="nav-list">
                    <li>
                        <Link to='/Profile'>
                            <i class="fas fa-user-circle"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Calendar'}>
                            <i class="fas fa-calendar-alt"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <i class="fas fa-times"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
        )
    }
}

export default Navbar;