import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fragment from 'react-dom-fragment';

// COMPONENT
import Header from './components/layout/Header';
import Login from './components/users/Login';
// import Header from './components/layout/Header';


function App() {
  return (
    <Router>
        <Fragment>
          <Header/>
          <Route exact path='/' component={Login}/>
        </Fragment>
    </Router>
  );
}

export default App;


