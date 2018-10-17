import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  render(){
    return(
      <div className="nav-container">
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
      </div>
    )
  }

}


export default NavBar;