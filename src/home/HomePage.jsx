import React, { Component } from 'react';
import Rules from '../contentComponents/RulesContent';
import CodeOfConduct from '../contentComponents/CodeOfConductContent'


class Home extends Component {
    render() {
      return (
        <div> 
          <h1>Welcome to CodeRounds</h1>
          <div>
            <p>
              This a place to practice coding skills while working with others on a project. We can either group you with people of simular interests or you can build a group and participate together.
            </p>
          </div>
          <Rules />
          <CodeOfConduct />
          <div>Filler text here</div>
        </div>

      );
    }
  }
  
  export default Home;