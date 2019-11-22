import React from "react";
import axios from "axios";
import CowList from "./cowList.jsx";
import Create from "./create.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowlist: []
    };

    this.createCow = this.createCow.bind(this);
  }

  componentDidMount() {
    this.updateCows();
  }

  updateCows() {
    return axios.get('http://127.0.0.1:3000/cows')
      .then(res => {
         const cows = res.data;
         return cows;
      })
      .then(data => {
        this.setState(
          {cowlist: data}
        );
      })
      .catch(
        err => {
          console.log('Error: ', err);
        }
      );
  }

  createCow(cow) {
    return axios.post('http://127.0.0.1:3000/cows', cow)
      .then(data => {
        const cowlistCopy = this.state.cowlist.slice(0);
        cowlistCopy.push(cow);
        this.setState({cowlist: cowlistCopy});
        return data;
      })
      .catch(
        err => {
          console.log('Error: ', err);
        }
      );
  }

  render() {
    return (
    <div className='cows'>
      <div>
        <CowList cows={this.state.cowlist}/>
      </div>
      <div>
        <Create createCow={this.createCow}/>
      </div>
    </div>
    );
  }
}

export default App;