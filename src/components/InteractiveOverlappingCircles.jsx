import React, { useState } from 'react';

const InteractiveOverlappingCircles = () => {
  const [isOn, setIsOn] = useState(false); // স্টেট সেট করুন, প্রাথমিকভাবে বন্ধ থাকবে

  const toggleSwitch = () => {
    setIsOn(!isOn); // টগল ক্লিক করলে স্টেট পরিবর্তন হবে
  };

  return (
    <div
      className="relative w-20 h-10 cursor-pointer overflow-hidden" // কন্টেইনার, overflow-hidden যাতে বৃত্তগুলো বাইরে না যায়
      onClick={toggleSwitch}
    >
      {/* সবুজ বৃত্ত */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full transition-all duration-300
          ${isOn ? 'left-full -translate-x-[calc(100%+0.5rem)]' : 'left-0'}`} // isOn হলে ডানদিকে সরে যাবে
      ></div>

      {/* হালকা বেগুনি/ধূসর বৃত্ত */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-200 rounded-full opacity-80 transition-all duration-300
          ${isOn ? 'left-1' : 'left-5'}`} // isOn হলে বাম দিকে, না হলে ওভারল্যাপ পজিশনে
      ></div>
    </div>
  );
};

export default InteractiveOverlappingCircles;