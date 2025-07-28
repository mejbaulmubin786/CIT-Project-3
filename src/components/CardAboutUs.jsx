import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from './Image';
import Flex from './Flex';

const CardAboutUs = ({ src }) => {
  return (
    <div className="flex flex-col items-center w-[1080px] h-[534px] bg-[#FFFFFF] rounded-[20px]">
      <div className="rounded-full overflow-hidden mt-[-73px]">
        <Image src={src} />
      </div>
      <Flex className="justify-center items-center gap-2">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </Flex>
    </div>
  );
};

export default CardAboutUs;