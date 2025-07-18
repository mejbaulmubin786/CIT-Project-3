import React from 'react'
import Container from '../components/Container'
import Card from '../components/Card'
import Grid from '../components/Grid'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/card4.png'
import Card5 from '../assets/card5.png'


const Cards = () => {
  const  card1 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  return (
    <section>
      <Container>
        <Grid className="grid-cols-3">
        <Card cardTitle="What We Do" cardText={card1} buttonText="Contact Us" type={false} />
        <Card className="rounded-3xl hover:bg-four p-[51px] text-center" cardTitle="Web design & Dev" cardText={card1} buttonText="Contact Us" type={true} img={Card1} />
        <Card className="rounded-3xl hover:bg-four p-[51px] text-center" cardTitle="Software Dev" cardText={card1} buttonText="Contact Us"  type={true} img={Card2} />
        <Card className="rounded-3xl hover:bg-four p-[51px] text-center" cardTitle="Sontent Writing" cardText={card1} buttonText="Contact Us"  type={true} img={Card3} />
        <Card className="rounded-3xl hover:bg-four p-[51px] text-center" cardTitle="Digital Marketing" cardText={card1} buttonText="Contact Us" type={true} img={Card4} />
        <Card className="rounded-3xl hover:bg-four p-[51px] text-center" cardTitle="Support & Training" cardText={card1} buttonText="Contact Us"  type={true} img={Card5} />
        </Grid>
      </Container>
    </section>
  )
}

export default Cards