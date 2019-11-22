import React from "react";
import MainCow from "./mainCow.jsx";

class CowList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedCow: {}
    };

    this.click = this.handleClick.bind(this);
  }

  handleClick(cow) {
    this.setState({selectedCow: cow})
  }
  
  render() {
    return (
      <div>
        <div><MainCow cow={this.state.selectedCow}/></div>
        <h1>Cow List</h1>
        <ul className='cow-list'>
          {this.props.cows.map(cow => {
            return (<li key={`${cow.name}`} onClick={() => this.click(cow)}>{cow.name} - {cow.description}</li>)
          })}
        </ul>
      </div>
    )
  }
}

export default CowList;