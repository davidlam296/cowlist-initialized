import React from "react";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: ''
    };

    this.change = this.handleChange.bind(this);
    this.submit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createCow({
      name: this.state.name,
      description: this.state.desc
    });
  }

  handleChange(type, value) {
    const valueObj = {};
    valueObj[type] = value;

    this.setState(valueObj);
  }

  render() {
    return (
      <div className='cow-creator'>
        <h1>Cow Creator</h1>
        <form type='submit'>
          <div>
            <h3>Name</h3>
            <input onChange={(event) => {this.change('name', event.target.value)}}/>
          </div>
          <div>
            <h3>Description</h3>
            <input onChange={(event) => {this.change('desc', event.target.value)}}/>
          </div>
          <div>
            <input type='submit' value='Create Cow' onClick={this.submit}/>
          </div>
        </form>
      </div>
    )
  }
}

export default Create;