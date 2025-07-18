import React from 'react'
import Container from '../components/Container'
import Card from '../components/Card'


const Cards = () => {
  const  card1 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  return (
    <section>
      <Container>
        <Card cardTitle="What We Do" cardText={card1} buttonText="Contact Us" />
      </Container>
    </section>
  )
}

export default Cards