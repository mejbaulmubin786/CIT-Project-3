import React from 'react'

const CommonText = ({text, className}) => {
  return (
    <p className={`text-four text-lg font-normal font-papri ${className}`}>{text}</p>
  )
}

export default CommonText