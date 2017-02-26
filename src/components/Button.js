import React from 'react';

function Button(props) {
  const extraClasses = props.extraClasses || []

  return <button className={[...extraClasses, 'btn'].join(' ')} onClick={props.onClick}>{props.text}</button>
}

export default Button;