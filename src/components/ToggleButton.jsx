import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false); // স্টেট সেট করুন, প্রাথমিকভাবে বন্ধ থাকবে

  const toggleSwitch = () => {
    setIsOn(!isOn); // টগল ক্লিক করলে স্টেট পরিবর্তন হবে
  };

  return (
    <div
      className={`relative w-14 h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-green-500' : 'bg-gray-300' // অন হলে সবুজ, অফ হলে ধূসর ব্যাকগ্রাউন্ড
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-full' : 'translate-x-0' // অন হলে ডানদিকে সরে যাবে, অফ হলে বামদিকে
        } absolute left-1`}
      ></div>
    </div>
  );
};

export default ToggleButton;