import React from 'react'
import Button from './Button'
import CommonHeading from './CommonHeading'
import AnotherHeading from './AnotherHeading'


const Card = ({className, cardTitle, cardText, buttonText, type, img}) => {
  return (
    <div className={`${className}`}>
      {type?<AnotherHeading img={img} title={cardTitle} />:<CommonHeading title={cardTitle} />}
      <p className='whitespace-pre-line'>{cardText}</p>
      <Button text={`${buttonText}`} />
    </div>
  )
}

export default Card