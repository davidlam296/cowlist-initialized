import React from 'react';
import CowList from './cowList.jsx';
import Farm from './farm.jsx';
import Axios from 'axios';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cows: []
    };

  }

  render() {
    return (
    <div>
      <h1>Cows! Cows! Cows!</h1>
      <div><Farm /></div>
      <div><CowList cows={this.state.cows}/></div>
    </div>
    );
  }
}