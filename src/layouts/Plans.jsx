import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PlanCard from '../components/PlanCard'
import CommonHeading from '../components/CommonHeading'
import Plan1 from '../assets/plan1.png'
import Plan2 from '../assets/plan2.png'
import Plan3 from '../assets/plan3.png'

const Plans = () => {
  return (
    <section className='bg-[#f9f9fb]'>
      <Container className="py-[100px]">
        <CommonHeading className="pb-[64px] text-center" title="Choose The Right Plan" />
        <Flex className="justify-between flex-wrap">
          <PlanCard title="Basic" src={Plan1} amo="160" info={`Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features`} />
          <PlanCard title="Professional" src={Plan2} amo="160" info={`Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features`} />
          <PlanCard title="Exclusive" src={Plan3} amo="160" info={`Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features`} />
        </Flex>
      </Container>

    </section>
  )
}

export default Plans