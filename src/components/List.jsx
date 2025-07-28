import React from 'react';

const List = ({ text, className = '', icon }) => {
  return (
    <li className={`text-[#EFF4FA] text-lg font-semibold font-open hover:text-[#1BBF00] duration-300 cursor-pointer list-none ${className}`}>
      <span className="flex items-center">
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </li>
  );
};

export default List;
