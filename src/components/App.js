import React from 'react';
import CanvasController from './CanvasController';
import NumOfLettersSelect from './NumOfLettersSelect';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfLetters: 5,
      possibleLetters: ['S', 'T', 'U']
    }

    this.changeNumLetters = this.changeNumLetters.bind(this)
    this.handleShowLettersClick = this.handleShowLettersClick.bind(this)
  }

  changeNumLetters(value) {
    this.setState({numOfLetters: Number.parseInt(value, 10) || ''})
  }

  handleShowLettersClick() {
    this.canvasController.showLetters()
  }

  render() {
    return (
      <div className='app'>
        <div className='controls'>
          <NumOfLettersSelect value={this.state.numOfLetters} handleChange={this.changeNumLetters}/>
          <Button extraClasses={['flash']} text='Flash' onClick={this.handleShowLettersClick}></Button>
        </div>
        <CanvasController
          numOfLetters={this.state.numOfLetters}
          possibleLetters={this.state.possibleLetters}
          ref={(controller) => { this.canvasController = controller }}
          height='400'
          width='400'
        />
      </div>
    )
  }
}

export default App;