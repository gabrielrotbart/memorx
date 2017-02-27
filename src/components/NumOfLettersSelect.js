import React from 'react';
import Input from './Input';

class NumOfLettersSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [4, 5, 6, 7, 8, 9]
    }
  }

  render() {
    return (
      <Input
        value={this.props.value}
        options={this.state.options}
        handleChange={this.props.handleChange}
        label='Number of letters'
      />
    )
  }
}

export default NumOfLettersSelect;