import React from 'react';
import Canvas from './Canvas';
import NumOfLettersSelect from './NumOfLettersSelect';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfLetters: 5,
      possibleLetters: ['S', 'T', 'U']
    }

    this.changeState = this.changeState.bind(this)
  }

  createStateHandler(key) {

    return (value) => {
      this.changeState({ key: key, value: value })
    }

  }

  changeState(changes) {
    const newState = Object.assign({}, this.state)
    newState[changes.key] = changes.value
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <NumOfLettersSelect value={this.state.numOfLetters} handleStateChange={this.createStateHandler('numOfLetters')}/>
        <Canvas numOfLetters={this.state.numOfLetters} possibleLetters={this.state.possibleLetters}/>
      </div>
    )
  }
}

export default App;