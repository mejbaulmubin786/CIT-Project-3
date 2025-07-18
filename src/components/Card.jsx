import React from 'react'
import Button from './Button'
import CommonHeading from './CommonHeading'
import AnotherHeading from './AnotherHeading'


const Card = ({cardTitle, cardText, buttonText, type}) => {
  return (
    <div>
      {type?<AnotherHeading title={cardTitle} />:<CommonHeading title={cardTitle} />}
      <p className='whitespace-pre-line'>{cardText}</p>
      <Button text={`${buttonText}`} />
    </div>
  )
}

export default Card