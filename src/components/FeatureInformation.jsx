import React from 'react'
import InteractiveOverlappingCircles from './InteractiveOverlappingCircles'
import CommonText from './CommonText'
import Flex from './Flex'

const FeatureInformation = ({text, className}) => {
  return (
    <div>
      <Flex>
        <InteractiveOverlappingCircles /> 
        <CommonText className={'${className}'} text={text} />
      </Flex>
      </div>
  )
}

export default FeatureInformation