import React from 'react'
import List from '../components/List'
import Button from '../components/Button'
import Image from '../components/Image'
import Logo from '../assets/logo.png'

import Container from './Container'
import Flex from './Flex'
const Navber = () => {

  return (
    <nav>
      <Container>
        <Flex className="items-center justify-between">
          <Image src={Logo} />
          <List text="Home" />
          <List text="About" />
          <List text="Service" />
          <List text="Portfolio" />
          <List text="Price" />
          <List text="Blog" />
          <Button text="Contact Us" />
        </Flex>

      </Container>
    </nav>
  )
}

export default Navber