import React from 'react'

const CommonHeading = ({title, className}) => {
  return (
    <h2 className={`text-third text-5xl font-open font-bold ${className}`}>{title}</h2>
  )
}

export default CommonHeading