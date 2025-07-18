import React from 'react'
import Button from './Button'
import CommonHeading from './CommonHeading'
import AnotherHeading from './AnotherHeading'
import CommonText from './CommonText'


const Card = ({className, cardTitle, cardText, buttonText, type, img}) => {
  return (
    <div className={`group gap-[20px] ${className}`}>
      {type?<AnotherHeading className="group-hover:text-white" img={img} title={cardTitle} />:<CommonHeading className="pb-[20px]" title={cardTitle} />}
      {type?<CommonText className="group-hover:text-white pb-[20px]" text={cardText} />:<p className='whitespace-pre-line pb-[56px]'>{cardText}</p>}     
      <Button text={`${buttonText}`} type={type}/>
    </div>
  )
}

export default Card