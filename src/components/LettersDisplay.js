import React from 'react';
import Canvas from './Canvas';
import randomBetween from '../helpers/random-between';

const LETTER_WIDTH = 10
const LETTER_HEIGHT = 20

class LettersDisplay extends React.Component {

  _renderLetters() {
    return this.props.letters.map((letter, index) => {
      const xCoordinate = randomBetween(LETTER_WIDTH, this.props.width - LETTER_WIDTH)
      const yCoordinate = randomBetween(LETTER_HEIGHT, this.props.height - LETTER_HEIGHT)

      return <div
        key={index}
        style={{
          position: 'absolute',
          left: xCoordinate,
          top: yCoordinate,
      }}>
        {letter}
      </div>
    })
  }

  render() {
    return <Canvas>{this._renderLetters()}</Canvas>
  }

}

export default LettersDisplay;