import React from 'react';

class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 400,
      width: 400
    }
  }

  randomisedCoordinate() {
    const height = this.state.height
    const width = this.state.width

    const x = this.randomBetween(0, (width - 12));
    const y = this.randomBetween(0, (height - 12));

    return {x: x, y: y}
  }

  randomisedNumOfLetters() {
    return this.props.numOfLetters - this.randomBetween(0, 2)
  }

  lettersToDisplay() {
    let letters = []
    let numOfLetters = this.randomisedNumOfLetters();

    for (let count = 0; count < numOfLetters; count++) {
      const choosenLetter = this.props.possibleLetters[this.randomBetween(0, this.props.possibleLetters.length)];
      const coordinates = this.randomisedCoordinate()

      letters.push({letter: choosenLetter, x: coordinates.x, y: coordinates.y});
    }

    return letters
  }

  randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  render() {
    const lettersToDisplay = this.lettersToDisplay();

    return (
      <div className='canvas'>
        {
          lettersToDisplay.map((letter, index) => {
            return <div
              key={index}
              style={{
                position: 'absolute',
                left: letter.x,
                top: letter.y,
              }}>{letter.letter}</div>
          })
        }
      </div>
    )
  }
}

export default Canvas;