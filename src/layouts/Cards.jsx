import React from 'react'
import Container from '../components/Container'
import Card from '../components/Card'
import Grid from '../components/Grid'
import Card1 from '../assets/card1.png'


const Cards = () => {
  const  card1 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  return (
    <section>
      <Container>
        <Grid className="grid-cols-3">
        <Card cardTitle="What We Do" cardText={card1} buttonText="Contact Us" type={false} />
        <Card cardTitle="Web design & Dev" cardText={card1} buttonText="Contact Us" type={true} img={Card1}/>
        <Card cardTitle="Software Dev" cardText={card1} buttonText="Contact Us"  type={true} />
        <Card cardTitle="Sontent Writing" cardText={card1} buttonText="Contact Us"  type={true} />
        <Card cardTitle="Digital Marketing" cardText={card1} buttonText="Contact Us" type={true} />
        <Card cardTitle="Support & Training" cardText={card1} buttonText="Contact Us"  type={true} />
        </Grid>
      </Container>
    </section>
  )
}

export default Cards