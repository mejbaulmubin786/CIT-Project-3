import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonText from '../components/CommonText'
import Button from '../components/Button'

import InteractiveOverlappingCircles from '../components/InteractiveOverlappingCircles'
import FeatureInformation from '../components/FeatureInformation'

const Feature = () => {
  return (
    <section className='bg-[#FDFDFD] py-[100px]'>

      <Container className="py-24">
        <Flex>
          <div className='w-1/2 pl-7'>
            <FeatureInformation text="We solve real world problems through people and the web" />
            <FeatureInformation text="We make processes and technology work efficiently together" />
            <FeatureInformation text="We advance improve existing technology through research and development" />
            <FeatureInformation text="We develop long-lasting and Scalable Solutions relationships partnerships" />
          </div>
          <div className='w-1/2 pl-[100px]'>
            <CommonHeading className="pb-5" title="Why Choose Us"/>
            <CommonText className="pb-10" text ={`We are now a team of strategists, 
              engineers, designers, and marketers who 
              both use and develop technology for a 
              variety of client needs.`} 
              />
              <Button text="contact us" />

          </div>
        </Flex>
      </Container>
    </section>

  )
}

export default Feature