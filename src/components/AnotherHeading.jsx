import React from "react";
import Image from "./Image";

const AnotherHeading = ({ img, title, className }) => {
  return (
    <>
    <Image src={img} />
      <h2 className={`text-third text-[30px] font-open font-bold ${className}`}>
        {title}
      </h2>
    </>
  );
};

export default AnotherHeading;
