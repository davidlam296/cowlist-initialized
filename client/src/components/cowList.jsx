import React from 'react';
import MainCow from './mainCow.jsx';

export default class CowList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCow: {}
    };

    this.select = this.changeSelected.bind(this);
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
      <div>
        <ol>
          {
            this.props.cows.map(cow => {
              return (this.state.selectedCow.id === cow.id) ? (<div></div>) :
              (
                <li onClick={() => this.select(cow)}>cow.name</li>
              )
            })
          }
        </ol>
      </div>
    </div>
    );
  }
}