import React from 'react'
import Canvas from './Canvas'
import Button from './Button';
import QuizResult from './QuizResult'

class Quiz extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasAnswered: false,
      answers: props.possibleLetters.reduce((answers, letter) => {
        answers[letter] = 0
        return answers
      }, {})
    }

    this.submitQuiz = this.submitQuiz.bind(this)
    this.updateAnswers = this.updateAnswers.bind(this)
  }

  countLetters() {
    const letters = this.props.displayedLetters

    return letters.reduce((letterCounts, letter) => {
      letterCounts[letter] ? letterCounts[letter]++ : letterCounts[letter] = 1

      return letterCounts
    }, {})
  }

  submitQuiz(event) {
    event.preventDefault()
    this.setState({hasAnswered: true})
  }

  updateAnswers(event) {
    event.preventDefault()

    let newNumber = Number.parseInt(event.target.value, 10)
    newNumber = Number.isNaN(newNumber) ? '' : newNumber

    let newAnswers = Object.assign(this.state.answers, {})
    newAnswers[event.target.name] = newNumber

    this.setState({answers: newAnswers})
  }

  renderQuiz() {
    return (
      <form className='quiz-form'>
        {
          this.props.possibleLetters.map((letter) => {
            return (
              <label key={letter}>
                <span className='quizzed-letter'>{letter}</span>
                <input value={this.state.answers[letter]} name={letter} type='number' onChange={this.updateAnswers} />
              </label>
            )
          })
        }
        <Button text='Submit' onClick={this.submitQuiz}/>
      </form>
    )
  }

  render() {
    return (
      <Canvas extraClasses={['quiz-canvas']}>
        { this.state.hasAnswered ? <QuizResult letterCounts={this.countLetters()} answers={this.state.answers} /> : this.renderQuiz() }
      </Canvas>
    )
  }
}

export default Quiz;