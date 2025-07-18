import React from 'react'

const Button = ({ text, className, type}) => {
  return (
    {type===undefined?
    <button className={`py-3 px-5 md:py-[14px] md:px-7 bg-primary rounded-[100px] text-base md:text-lg text-white font-semibold font-open border border-transparent hover:bg-transparent hover:text-white hover:border-primary duration-300 ${className}`}>{text}</button>:

    <button className={`py-3 px-5 md:py-[14px] md:px-7 rounded-[100px] text-base md:text-lg text-white font-semibold font-open ${className}`}>{text}</button>}
  )
}

export default Button