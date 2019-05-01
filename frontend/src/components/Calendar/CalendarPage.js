import React, { Component } from 'react';
import Fragment from 'react-dom-fragment';

// COMPONENTS 
import Header from '../layout/Header';

class Calendar extends Component {
  render() {
    return (
        <Fragment>
          <Header/>
        </Fragment>
    );
  }
}

export default Calendar;