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

    this.addCow = this.addCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
    this.updateCow = this.updateCow.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  addCow(cow) {
    Axios.post('/cows', cow)
      .then(() => {
        this.getCows();
      })
      .catch(err => {
        console.log('Error ', err);
      })
  }

  getCows() {
    Axios.get('/cows')
      .then(res => {
        this.setState({
          cows: res.data
        })
      })
      .catch(err => {
        console.log('Error ', err);
      })
  }

  deleteCow(cow) {
    Axios.delete('/cows', {
      params: {
        _id: cow._id
      }
    })
      .then(() => {
        this.getCows();
      })
      .catch(err => {
        console.log('Error ', err);
      })
  }

  updateCow(cow) {
    Axios.put('/cows', cow)
      .then(() => {
        this.getCows();
      })
      .catch(err => {
        console.log('Error ', err);
      })
  }

  render() {
    return (
    <div>
      <h1>Cows! Cows! Cows!</h1>
      <div><Farm addCow={this.addCow}/></div>
      <div><CowList cows={this.state.cows} delete={this.deleteCow} update={this.updateCow}/></div>
    </div>
    );
  }
}