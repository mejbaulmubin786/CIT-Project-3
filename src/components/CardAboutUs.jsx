import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from './Image';
import Flex from './Flex';
import CommonText from './CommonText';

const CardAboutUs = ({ src, text }) => {
  return (
    <div className="flex flex-col items-center w-[1080px] h-[461px] bg-[#FFFFFF] rounded-[20px] drop-shadow-xl">
      <div className="rounded-full overflow-hidden mt-[-73px] drop-shadow-2xl">
        <Image src={src} />
      </div>
      <Flex className="justify-center items-center gap-2 mt-[45px] mb-[33px] text-yellow-500">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </Flex>
      <CommonText className="whitespace-pre-line text-center text-base leading-10 font-normal" text={text} />
    </div>
  );
};

export default CardAboutUs;