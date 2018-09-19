import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
      return (
        <footer className="App-footer">
          <Link to='/'>Home</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/contact'>Contact Us</Link>
        </footer>
      );
    }
  }
  
  export default Footer;