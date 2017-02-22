import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '4'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <form>
        <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        <div>{this.state.value}</div>
      </form>
    )
  }
}

export default Input;