import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.handleStateChange(event.target.value)
  }

  render() {
    return (
      <form>
        <select value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.handleChange}>
          {
            this.props.options.map((option, index) => {
              return <option key={index} value={option}>{option}</option>
            })
          }
        </select>
      </form>
    )
  }
}

export default Select;