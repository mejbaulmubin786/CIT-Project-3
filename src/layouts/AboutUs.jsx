import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CardAboutUs from '../components/CardAboutUs'
import Profile1 from '../assets/profile1.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
//<FontAwesomeIcon icon={byPrefixAndName.fas['angle-down']} /> 

const AboutUs = () => {
  return (
    <section className='pt-[100px] pb-[100px] bg-[#F8F8FF]'>
      <Container>
        <CommonHeading className="text-center mb-[152px]" title="What The People Thinks About Us" />
        <div>
          <Flex className="justify-center items-center relative">
            <div className='w-[64px] h-[64px] bg-primary rounded-full absolute top-[50%] left-[-100px] translate-y-[-50%] flex items-center justify-center'>
            <FontAwesomeIcon className='text-xl text-white' icon={faAngleLeft} />
            </div>
            <Flex className="justify-center">
              <CardAboutUs src={Profile1} text={`Lesser Replenish bearing they’re him cattle kind dominion. You\nwhich fill place. Land she’d subdue divided gathering blessed\nseasons it. Without, wherein days.`} />
            </Flex>
            <div className='w-[64px] h-[64px] bg-primary rounded-full absolute top-[50%] right-[-100px] translate-y-[-50%] flex items-center justify-center'>
            <FontAwesomeIcon className='text-xl text-white' icon={faAngleRight} />
            </div>
          </Flex>
        </div>
      </Container>

    </section>
  )
}

export default AboutUs