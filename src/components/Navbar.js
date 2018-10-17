import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render(){
    return(
      <div className="nav-container">
        <Link to='/'>Home</Link>
        <Link to='/pageone'>Page One</Link>
        <Link to='/pagetwo'>Page Two</Link>
      </div>
    )
  }

}


export default NavBar;