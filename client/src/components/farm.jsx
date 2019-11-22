import React from 'react';

export default class Farm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.change = this.updateInfo.bind(this);
  }

  updateInfo(type, text) {
    const stateObj = {};
    stateObj[type] = text;
    
    this.setState(stateObj);
  }

  render() {
    return (
    <div>
      <h2>Farm: The Cow Factory</h2>
      <table>
        <tbody>
          <tr>
            <td>Name: </td>
            <td><input id='name' onChange={(e) => {this.change(e.target.id, e.target.value)}}></input></td>
          </tr>
          <tr>
            <td>Description: </td>
            <td><input id='description' onChange={(e) => {this.change(e.target.id, e.target.value)}}></input></td>
          </tr>
        </tbody>
      </table>
      <button>Generate!</button>
    </div>
    );
  }
}