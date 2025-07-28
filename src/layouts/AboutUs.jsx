import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CardAboutUs from '../components/CardAboutUs'
import Profile1 from '../assets/profile1.png'

const AboutUs = () => {
  return (
    <section className='pt-[100px] pb-[100px] bg-[#F8F8FF]'>
      <Container>
          <CommonHeading className="text-center mb-[152px]" title="What The People Thinks About Us" />
          <Flex>
            <CardAboutUs src={Profile1}/>
          </Flex>
      </Container>  
    </section>
  )
}

export default AboutUs