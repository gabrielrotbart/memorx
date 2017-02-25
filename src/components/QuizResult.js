import React from 'react'
import Canvas from './Canvas'

class QuizResult extends React.Component {

  constructor(props) {
    super(props);

    this.results = this.results.bind(this)
  }

  results() {
    const letters = Object.keys(this.props.answers)

    return letters.map((letter) => {
      let result = {
        letter: letter,
        answered: this.props.answers[letter],
        displayed: this.props.letterCounts[letter] || 0,
      }

      return result
    })
  }

  calculatePrecentage() {
    const letterCounts = this.props.letterCounts
    const letters = Object.keys(letterCounts)
    const answers = this.props.answers

    const precentages = letters.map((letter) => {
      const incorrect = Math.abs(letterCounts[letter] - answers[letter])
      return 1 - (incorrect / letterCounts[letter])
    })

    console.log(precentages)

    const total = precentages.reduce((sum, precentage) => {
      return sum + precentage
    })

    return (total / letters.length) * 100
  }

  render() {
    const results = this.results()

    return (
      <div>
        <div className='answers'>
          {
            results.map((result) => {
              return (
                <div className='answer' key={result.letter}>
                  <span>{result.letter}</span><span>{result.answered} / {result.displayed}</span>
                </div>
              )
            })
          }
        </div>
        <div>{this.calculatePrecentage()}%</div>
      </div>
    )
  }
}

export default QuizResult