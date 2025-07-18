import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Div from './/Div'

const ServiceCard = ({title, text, className}) => {
  return (
    <div className={`flex-1 text-center relative before:absolute before:w-[2px] before:h-full before:bg-box before:right-0 ${className}`}>
      <span className='font-open text-[68px] font-extrabold text-primary block'>{title}</span>
      <span className='font-open text-[36px] font-extrabold text-thrid block'>{text}</span>
    </div>
  )
}

export default ServiceCard