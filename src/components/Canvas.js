import React from 'react';

class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfLetters: 6,
      possibleLetters: ['S', 'T', 'U'],
      height: 400,
      width: 400
    }
  }

  randomisedCoordinate() {
    const height = this.state.height
    const width = this.state.width

    const x = this.randomBetween(0, width);
    const y = this.randomBetween(0, height);

    return {x: x, y: y}
  }

  lettersToDisplay() {
    let letters = []

    for (let count = 0; count < this.props.numOfLetters; count++) {
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
                marginLeft: this.state.width
              }}>{letter.letter}</div>
          })
        }
      </div>
    )
  }
}

export default Canvas;