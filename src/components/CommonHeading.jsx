import React from 'react'

const CommonHeading = ({text, className}) => {
  return (
    <h2 className={`text-third text-5xl font-open font-bold ${className}`}>{text}</h2>
  )
}

export default CommonHeading