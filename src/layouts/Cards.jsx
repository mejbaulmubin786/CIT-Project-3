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
  const  card2 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  const  card3 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  const  card4 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  const  card5 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  const  card6 = `We are now a team of Strategists,\nengineers, designers, and marketers\nwho both use and develop technology`;
  return (
    <section className='py-[100px] bg-five'>
      <Container>
        <Grid className="grid-cols-3 gap-[30px]">
        <Card cardTitle="What We Do" cardText={card1} buttonText="Contact Us" type={false} />
        <Card className="bg-white rounded-3xl hover:bg-four p-[30px] text-center" cardTitle="Web design & Dev" cardText={card2} buttonText="Contact Us" type={true} img={Card1} />
        <Card className="bg-white rounded-3xl hover:bg-four p-[30px] text-center" cardTitle="Software Dev" cardText={card3} buttonText="Read More"  type={true} img={Card2} />
        <Card className="bg-white rounded-3xl hover:bg-four p-[30px] text-center" cardTitle="Sontent Writing" cardText={card4} buttonText="Read More"  type={true} img={Card3} />
        <Card className="bg-white rounded-3xl hover:bg-four p-[30px] text-center" cardTitle="Digital Marketing" cardText={card5} buttonText="Read More" type={true} img={Card4} />
        <Card className="bg-white rounded-3xl hover:bg-four p-[30px] text-center" cardTitle="Support & Training" cardText={card5} buttonText="Read More"  type={true} img={Card5} />
        </Grid>
      </Container>
    </section>
  )
}

export default Cards