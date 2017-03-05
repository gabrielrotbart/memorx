import React from 'react'
import RadioButton from './RadioButton'
import arraySameness from '../helpers/array-sameness'
class LettersSelect extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      letterOptions: [
        ['S', 'T'],
        ['S', 'T', 'U'],
        ['S', 'T', 'U', 'X'],
        ['S', 'T', 'U', 'X', 'L']
      ]
    }

    this.selectOption = this.selectOption.bind(this)
    this.isChecked = this.isChecked.bind(this)
  }

  selectOption(event) {
    const newLetters = event.currentTarget.value.split(',')

    this.props.handleChange(newLetters)
  }

  isChecked(option) {
    return arraySameness(option, this.props.currentLetters)
  }

  render() {
    return (
      <div className='radio-group flex-column'>
        {
          this.state.letterOptions.map((option, index) => {
            let checked = this.isChecked(option)

            return (
              <RadioButton label={option.join(', ')} key={option.join(', ')} value={option} checked={checked} onChange={this.selectOption} />
            )
          })
        }
      </div>
    )
  }
}

export default LettersSelect