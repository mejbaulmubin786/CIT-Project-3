import React from 'react'

const Grid = ({children, className}) => {
  return (
    <div className={`grid w-full ${className}`}>{children}</div>
  )
}

export default Grid