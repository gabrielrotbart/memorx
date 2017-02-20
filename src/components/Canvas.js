import React from 'react';

class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfLetters: 6,
      possibleLetters: ['x', 'y', 'u'],
      height: 400,
      width: 400
    }
  }

  randomisedCoordinate() {
    const height = this.state.height
    const width = this.state.width

    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    return {x: x, y: y}
  }

  lettersToDisplay() {
    let letters = []

    for (let count = 0; count < this.state.numOfLetters; count++) {
      const choosenLetter = this.state.possibleLetters[Math.floor(Math.random() * this.state.possibleLetters.length)];
      const coordinates = this.randomisedCoordinate()

      letters.push({letter: choosenLetter, x: coordinates.x, y: coordinates.y});
    }

    return letters
  }

  render() {
    const lettersToDisplay = this.lettersToDisplay();

    return (
      <div className='canvas'>
        {
          lettersToDisplay.map((letter, index) => {
            return <div key={index} style={{position: 'absolute', left: letter.x, top: letter.y}}>{letter.letter}</div>
          })
        }
      </div>
    )
  }
}

export default Canvas;