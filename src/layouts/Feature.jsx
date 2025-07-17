import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonText from '../components/CommonText'
import Button from '../components/Button'

const Feature = () => {
  return (
    <section>

      <Container>
        <Flex>
          <div className='w-1/2'></div>
          <div className='w-1/2'>
            <CommonHeading text="Why Choose Us"/>
            <CommonText text ={`We are now a team of strategists, 
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