import React from 'react'

class Quiz extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasAnswered: false
    }
  }

  render() {
    return(
      <div>{this.props.displayedLetters}</div>
    )
  }
}

export default Quiz;