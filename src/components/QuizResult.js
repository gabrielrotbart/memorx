import React from 'react'

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
    const answers = this.props.answers
    const letters = Object.keys(answers)
    const letterCounts = this.props.letterCounts

    const incorrectAnswers = letters.reduce((sum, letter) => {
      const incorrectCount = Math.abs((letterCounts[letter] || 0) - answers[letter])
      const incorrect = incorrectCount > 0 ? 1 : 0
      return sum + incorrect
    }, 0)

    const totalPrecentage = (1 - (incorrectAnswers / letters.length)) * 100

    return Math.round(totalPrecentage)
  }

  render() {
    const results = this.results()

    return (
      <div className='results flex-column'>
        {
          results.map((result) => {
            return (
              <div className='answer' key={result.letter}>
                <span className='letter'>{result.letter}</span><span>{result.answered} / {result.displayed}</span>
              </div>
            )
          })
        }
        <div className='percentage'>{this.calculatePrecentage()}%</div>
      </div>
    )
  }
}

export default QuizResult