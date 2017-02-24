import React from 'react';
import Button from './Button';
import Canvas from './Canvas';
import LettersDisplay from './LettersDisplay';
import randomBetween from '../helpers/random-between';
import Quiz from './Quiz';

class CanvasController extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showingLetters: false,
      showingQuiz: false,
      letters: []
    }

    this.showLetters = this.showLetters.bind(this)
  }

  randomiseNumOfLetters(numOfLetters) {
    return numOfLetters - randomBetween(0, 2)
  }

  showLetters(event) {
    event.preventDefault();
    this.setState({
      letters: this.lettersToDisplay(),
      showingLetters: true
    })

    window.setTimeout(() => { this.setState({showingQuiz: true, showingLetters: false}) }, 1000)
  }

  lettersToDisplay() {
    let letters = []
    const randomisedNumOfLetters = this.randomiseNumOfLetters(this.props.numOfLetters)

    for (let count = 0; count < randomisedNumOfLetters; count++) {
      letters = [...letters, this.props.possibleLetters[randomBetween(0, this.props.possibleLetters.length)]];
    }

    return letters
  }

  renderLetters() {
    return (
      <LettersDisplay letters={this.state.letters} width={this.props.width} height={this.props.height} />
    )
  }

  renderQuiz() {
    return (
      <Canvas>
        <Quiz displayedLetters={this.state.letters}/>
      </Canvas>
    )
  }

  renderCanvas() {
    if (this.state.showingLetters && !this.state.showingQuiz) {
      return this.renderLetters()
    } else if (this.state.showingQuiz) {
      return this.renderQuiz()
    } else {
      return (
        <Canvas>
          <Button text='Show Letters!' onClick={this.showLetters}></Button>
        </Canvas>
      )
    }
  }

  render() {
    return this.renderCanvas()
  }
}

export default CanvasController;