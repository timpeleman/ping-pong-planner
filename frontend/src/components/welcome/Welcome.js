import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fragment from 'react-dom-fragment';

//COMPONENTS 
import Header from '../layout/Header';

class Welcome extends Component {
    render() {
        return(
            <Fragment>
                <Header/>
                <ul>
                    <li>eerste</li>
                    <li>jeej het werkt</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                    <li>qlmsdfjqmsldfjmqsdfjkmqks</li>
                </ul>
            </Fragment>
        )
    }
}

export default Welcome;


{/* <Header/>
                    <Switch>
    <Route exact path="/Calendar" component={Calendar}/>
    <Route exact path="/Profile" component={Profile}/>
</Switch> 
*/}