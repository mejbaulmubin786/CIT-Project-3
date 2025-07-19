import React from 'react'
import Image from './Image'


const PlanCard = ({title, src, amo, info}) => {
  return (
    <div className='bg-[#ffffff] w-[370px] h-[561px] rounded-[20px] text-center group hover:bg-four'>
      <h3 className="pt-[60px] pb-[26px] font-bold font-open text-[30px] group-hover:text-white">{title}</h3>
      <Image src={src} className="group-hover:bg-transparent bg-[#ECEDF0]"/>
      <h4 className='pb-[12px] pt-[20px] font-bold font-open text-[48px] text-primary'>
      <sup>$</sup>
      {amo}</h4>
      <p className='whitespace-pre-line font-papri text-[18px] text-four group-hover:text-white'>{info}</p>
    </div>
  )
}

export default PlanCard