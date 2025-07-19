import React, { useState } from "react";
import InteractiveOverlappingCircles from "./InteractiveOverlappingCircles";
import CommonText from "./CommonText";
import Flex from "./Flex";

const FeatureInformation = ({ text, className }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn); // টগল ক্লিক করলে স্টেট পরিবর্তন হবে
  };

  return (
    <>
      <Flex className="gap-x-[50px] p-[28px] rounded hover:bg-[#ffffff]">
        {/* <InteractiveOverlappingCircles />  */}
        <div className="relative" onClick={toggleSwitch}>
          {isOn ? (
            <>
              <div className="absolute top-[5px] left-0 w-[20px] h-[20px] rounded-full bg-[#CBC8F0]"></div>
              <div className="absolute top-[5px] left-[10px] w-[20px] h-[20px] rounded-full bg-primary"></div>
            </>
          ) : (
            <>
              <div className="absolute top-[5px] left-[10px] w-[20px] h-[20px] rounded-full bg-[#CBC8F0]"></div>
              <div className="absolute top-[5px] left-0 w-[20px] h-[20px] rounded-full bg-primary"></div>
            </>
          )}
        </div>

        <CommonText text={text} />
      </Flex>
    </>
  );
};

export default FeatureInformation;
