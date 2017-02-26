import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <label className='input'>
        <div className='label'>{this.props.label}</div>
        <input className='input-field' type='text' value={this.props.value} onChange={this.handleChange}></input>
      </label>
    )
  }
}

export default Input;