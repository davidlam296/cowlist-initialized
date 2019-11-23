import React from 'react';

export default class Farm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.change = this.updateInfo.bind(this);
    this.create = this.createCow.bind(this);
  }

  updateInfo(type, text) {
    const stateObj = {};
    stateObj[type] = text;
    
    this.setState(stateObj);
  }

  createCow() {
    if (this.state.name !== '' && this.state.description !== '') {
      this.props.addCow({
        name: this.state.name,
        description: this.state.description
      });
    } else {
      alert(`Name and/or description can't be empty.`);
    }
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
      <button onClick={this.create}>Generate!</button>
    </div>
    );
  }
}