import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

const Services = () => {
  return (
    <section>
      <Container className=''>
        <Flex className='gap-x-[30px] mt-[-151px]'>
          <div className='bg-box w-[270px] h-[350px] rounded-lg mt-[28px]'></div>
          <div className='bg-box w-[200px] h-[496px] rounded-lg'></div>
          <div className='bg-box w-[340px] h-[326px] rounded-lg mt-[116px]'></div>
          <div className='bg-box w-[270px] h-[482px] rounded-lg mt-[34px]'></div>

        </Flex>
      </Container>
      <Container className='mt-[100px] mb-[100px]'>
        <Flex className='justify-between'>
          <div className='text-center'><span className='font-open text-[68px] font-extrabold text-primary block'>53k</span><span>Happy Client</span></div>
          <div className='text-center'><span className='font-open text-[68px] font-extrabold text-primary block'>10k</span><span>Project Done</span></div>
          <div className='text-center'><span className='font-open text-[68px] font-extrabold text-primary block'>120k</span><span>Gets Award</span></div>
          <div className='text-center'><span className='font-open text-[68px] font-extrabold text-primary block'>16k</span><span>Operated Years</span></div>
        </Flex>
      </Container>
    </section>
  )
}

export default Services