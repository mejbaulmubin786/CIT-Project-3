import React from 'react'
import List from '../components/List'
import Button from '../components/Button'
import Image from '../components/Image'
import Logo from '../assets/logo.png'

import Container from './Container'
import Flex from './Flex'
const Navber = () => {

  return (
    <nav className='bg-[#160c6d80] py-[18px] absolute top-0 left-0 z-10 w-full'>
      <Container>
        <Flex className="items-center justify-between">
          <Image src={Logo} />
          <ul className='flex gap-x-8'>
          <List text="Home" />
          <List text="About" />
          <List text="Service" />
          <List text="Portfolio" />
          <List text="Price" />
          <List text="Blog" />
          </ul>
          <Button text="Contact Us" />
        </Flex>

      </Container>
    </nav>
  )
}

export default Navber