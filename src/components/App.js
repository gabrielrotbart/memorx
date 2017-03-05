import React from 'react';
import CanvasController from './CanvasController';
import NumOfLettersSelect from './NumOfLettersSelect';
import Button from './Button';
import LettersSelect from './LettersSelect';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfLetters: 5,
      possibleLetters: ['S', 'T', 'U']
    }

    this.changeNumLetters = this.changeNumLetters.bind(this)
    this.handleShowLettersClick = this.handleShowLettersClick.bind(this)
    this.changeLetters = this.changeLetters.bind(this)
  }

  changeNumLetters(value) {
    this.setState({numOfLetters: Number.parseInt(value, 10) || ''})
  }

  changeLetters(value) {
    this.setState({possibleLetters: value})
    this.resetApp()
  }

  handleShowLettersClick() {
    this.canvasController.showLetters()
  }

  resetApp() {
    this.canvasController.resetCanvas()
  }

  render() {
    return (
      <div className='app'>
        <div className='controls flex'>
          <NumOfLettersSelect value={this.state.numOfLetters} handleChange={this.changeNumLetters}/>
          <LettersSelect currentLetters={this.state.possibleLetters} handleChange={this.changeLetters}/>
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