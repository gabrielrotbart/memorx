import React from 'react';
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
      letters: this.lettersToDisplay()
    }

    this.showLetters = this.showLetters.bind(this)
  }

  adjustNumLetters(numOfLetters) {
    const adjusted = numOfLetters - randomBetween(0, 2)
    if (adjusted < 3) {
      return 3
    } else if (adjusted > 15) {
      return 15
    } else {
      return adjusted
    }
  }

  showLetters(event) {
    this.setState({
      letters: this.lettersToDisplay(),
      showingQuiz: false,
      showingLetters: true
    })

    window.setTimeout(() => { this.setState({showingQuiz: true, showingLetters: false}) }, 1000)
  }

  lettersToDisplay() {
    let letters = []
    const adjustedNumOfLetters = this.adjustNumLetters(this.props.numOfLetters)

    for (let count = 0; count < adjustedNumOfLetters; count++) {
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
      <Quiz displayedLetters={this.state.letters} possibleLetters={this.props.possibleLetters}/>
    )
  }

  renderInstructions() {
    const adjustedNumOfLetters = this.adjustNumLetters(this.props.numOfLetters)

    return (
      <Canvas>
        <div className='message'>
          <h2 className='heading-2'>Short term visual memory training</h2>
          <p>
            Between {adjustedNumOfLetters - 1} and {adjustedNumOfLetters} (adjust above) letters ({this.props.possibleLetters.join(', ')}) will flash for one second.
          </p>
          <p>
            Form a mental image of the screen and use it to provide correct counts.
          </p>
          <p className='footer'>
            Based on Dr. Lev Goldentouch's &nbsp;
            <a href='http://www.keytostudy.com/short-term-visual-memory-training/' target='_blank'>Key to Study exercise</a>
          </p>
        </div>
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
        this.renderInstructions()
      )
    }
  }

  render() {
    return this.renderCanvas()
  }
}

export default CanvasController;