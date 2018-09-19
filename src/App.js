import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./home/HomePage"
import Header from "./siteComponents/Header"
import Signup from "./signup/SignupPage"
import './App.css';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/signup' component={Signup}></Route>
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
