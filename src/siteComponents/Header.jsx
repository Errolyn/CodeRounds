import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/CodeRoundsLogo.png';

class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/contact'>Contact Us</Link>
        </header>
      );
    }
  }
  
  export default Header;