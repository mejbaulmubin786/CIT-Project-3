import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // <-- সঠিক ইম্পোর্ট
//<FontAwesomeIcon icon={byPrefixAndName.fas['angle-down']} /> <FontAwesomeIcon icon="fa-solid fa-angle-down" />

const List = ({ text, className }) => {
  return (
    <li className={`text-[#EFF4FA] text-lg font-semibold font-open hover:text-[#1BBF00] duration-300 cursor-pointer list-none ${className}`}>
      {text}
      {/* সঠিক সিনট্যাক্স: ইম্পোর্ট করা আইকনটি props হিসেবে পাস করুন */}
      <FontAwesomeIcon style={{ marginLeft: '8px' }} icon={faAngleDown} />
    </li>
  );
};

export default List;