import React from 'react'
import Button from './Button'

const Card = ({cardTitle, cardText, buttonText}) => {
  return (
    <div>
      <h2>{cardTitle}</h2>
      <p>{cardText}</p>
      <Button className={'whitespace-pre-line'} text={`${buttonText}`} />
    </div>
  )
}

export default Card