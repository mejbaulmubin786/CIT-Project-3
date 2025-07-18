import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Div from '../components/Div'

import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section>
      <Container className=''>
        <Flex className='gap-x-[30px] mt-[-151px]'>
          <Div className={`w-[270px] h-[350px] mt-[28px]`} />
          <Div className={`w-[200px] h-[496px]`} />
          <Div className={`w-[340px] h-[326px] mt-[116px]`} />
          <Div className={`w-[270px] h-[482px] mt-[34px]`} />
        </Flex>
      </Container>
      <Container className='mt-[100px] mb-[100px]'>
        <Flex>
          <ServiceCard title="53k" text="happy clients" />
          <ServiceCard title="10k" text="Project Done" />
          <ServiceCard title="120k" text="Gets Award" />
          <ServiceCard className="before:bg-transparent" title="16k" text="Operated Years" />
        </Flex>
      </Container>
    </section>
  )
}

export default Services