import React from 'react';

function RadioButton(props) {
  return (
    <label key={props.label} className='radio flex'>
      <input
        checked={props.checked}
        type='radio'
        value={props.value}
        onChange={props.onChange}
      />
      <span className={[(props.checked ? 'checked' : ''), 'radio-outer'].join(' ')}>
        <span className='radio-inner'></span>
      </span>
      {props.label}
    </label>
  )
}

export default RadioButton