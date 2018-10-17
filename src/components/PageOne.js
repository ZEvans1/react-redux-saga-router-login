import React, { Component } from 'react';
import NavBar from './Navbar';

class PageOne extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <p>This is PageOne.js</p>
      </div>
    )
  }
}

export default PageOne;