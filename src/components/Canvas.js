import React from 'react';

export default function Canvas(props) {
  const extraClasses = (props.extraClasses || [])

  return (
    <div className={[...extraClasses, 'canvas'].join(' ')}>
      {props.children}
    </div>
  )
}