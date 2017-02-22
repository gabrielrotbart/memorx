import React from 'react';
import Select from './Select';

class NumOfLettersSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [4,5,6,7,8,9]
    }
  }

  render() {
    return (
      <Select value={this.props.value} options={this.state.options} handleStateChange={this.props.handleStateChange}/>
    )
  }
}

export default NumOfLettersSelect;