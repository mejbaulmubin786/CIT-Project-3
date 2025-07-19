import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/List'


const Footer = () => {
  return (
    <footer className='bg-secondary py-[100px]'>
      <Container>
        <Flex>

        <div className='w-6/12'>
            <Image src={Logo}/>
            <p className='whitespace-pre-line text-white pt-[44px]'>{`Install any demo or template with a single click. You\n can mix and match all the demos & templates. Every\n demo can be turned into one or multi-page.`}</p>
            <p className='text-white pt-[189px]'>@20201 Innovate.All rights reserved.</p>
        </div>
        <div className='w-2/12'>
          <h3 className='text-white text-[24px] text-semibold pb-[48px]'>Features</h3>
          <List className="pb-[30px]" text="home" />
          <List className="pb-[30px]" text="about" />
          <List className="pb-[30px]" text="Benefits" />
          <List className="pb-[30px]" text="Pricing" />
          <List className="pb-[30px]" text="Blog" />
        </div>
        <div className='w-2/12'>
          <h3 className='text-white text-[24px] text-semibold pb-[48px]'>Products</h3>
          <List className="pb-[30px]" text="Task Management" />
          <List className="pb-[30px]" text="Company growth" />
          <List text="Time tracking" />
          <p className='text-white pt-[189px]'>Privacy policy</p>
        </div>
        <div className='w-2/12'>
          <h3 className='text-white text-[24px] text-semibold pb-[48px]'>Supports</h3>
          <List className="pb-[30px]" text="Customer service" />
          <List className="pb-[30px]" text="Accessibility" />
          <List text="Contact us" />
          <p className='text-white pt-[189px] text-left'>Terms & condition</p>
        </div>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer