import React from 'react';
import MainCow from './mainCow.jsx';

export default class CowList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCow: {}
    };

    this.select = this.changeSelected.bind(this);
    this.delete = this.deleteCow.bind(this);
    this.update = this.updateCow.bind(this);
  }

  updateCow(cow, type) {
    const update = prompt(`Enter new ${type}`);
    const updatedCow = {
      _id: cow._id
    }
    if (type === 'name') { updatedCow.description = cow.description; }
    else if (type === 'description') { updatedCow.name = cow.name; }

    if(Boolean(update)) {
      updatedCow[type] = update;
      this.props.update(updatedCow);
    }
  }

  deleteCow(cow) {
    this.props.delete(cow);
  }

  changeSelected(cow) {
    this.setState({
      selectedCow: cow
    })
  }

  render() {
    return (
    <div>
      <h2>All the Cows:</h2>
      <div><MainCow cow={this.state.selectedCow}/></div>
      <table>
        <tbody>
          {
            this.props.cows.map(cow => {
              if (this.state.selectedCow._id !== cow._id) {
                return (
                  <tr key={cow._id}>
                    <td onClick={() => this.select(cow)}>{cow.name}</td>
                    <td><button onClick={() => this.update(cow, 'name')}>New Name</button></td>
                    <td><button onClick={() => this.update(cow, 'description')}>New Description</button></td>
                    <td><button onClick={() => this.delete(cow)}>To the Slaughterhouse...</button></td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>
    </div>
    );
  }
}