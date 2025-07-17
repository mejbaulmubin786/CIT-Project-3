import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Div from '../components/Div'

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
          <div className='flex-1 text-center relative before:absolute before:w-[2px] before:h-full before:bg-box before:right-0'><span className='font-open text-[68px] font-extrabold text-primary block'>53k</span><span className='font-open text-[36px] font-extrabold text-thrid block'>Happy Client</span></div>
          <div className='flex-1 text-center relative before:absolute before:w-[2px] before:h-full before:bg-box before:right-0'><span className='font-open text-[68px] font-extrabold text-primary block'>10k</span><span className='font-open text-[36px] font-extrabold text-thrid block'>Project Done</span></div>
          <div className='flex-1 text-center relative before:absolute before:w-[2px] before:h-full before:bg-box before:right-0'><span className='font-open text-[68px] font-extrabold text-primary block'>120k</span><span className='font-open text-[36px] font-extrabold text-thrid block'>Gets Award</span></div>
          <div className='flex-1 text-center relative last:before:hidden'><span className='font-open text-[68px] font-extrabold text-primary block'>16k</span><span className='font-open text-[36px] font-extrabold text-thrid block'>Operated Years</span></div>
        </Flex>
      </Container>
    </section>
  )
}

export default Services