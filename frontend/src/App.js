import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fragment from 'react-dom-fragment';

// COMPONENTS
import Login from './components/users/Login';
import Register from './components/users/Register';
import Welcome from './components/welcome/Welcome';
import Profile from './components/users/Profilepage';
import Calendar from './components/Calendar/CalendarPage';



function App() {
  return (
    <Router>
        <Fragment>
          <Route exact path='/' component={Login}/>
          <section>
            <Switch>
              <Route exact path="/Register" component={Register}/>
              <Route exact path='/Welcome' component={Welcome}/>
              <Route exact path='/Profile' component={Profile}/>
              <Route exact path='/Calendar' component={Calendar}/>
            </Switch>
          </section>
        </Fragment>
    </Router>
  );
}

export default App;





