import React, { Component } from 'react';
import Fragment from 'react-dom-fragment';

// COMPONENTS 
import Header from '../layout/Header';

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <h1>profilepage</h1>
      </Fragment>
    );
  }
}

export default Profile;