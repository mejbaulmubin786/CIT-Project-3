import React from 'react';

const OverlappingCircles = () => {
  return (
    <div className="relative w-16 h-8"> {/* কন্টেইনারের সাইজ আপনার প্রয়োজন অনুযায়ী সেট করুন */}
      {/* সবুজ বৃত্ত */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-green-500 rounded-full"></div>
      
      {/* হালকা বেগুনি/ধূসর বৃত্ত - এটি সবুজ বৃত্তের উপরে থাকবে */}
      <div className="absolute top-0 left-5 w-8 h-8 bg-purple-200 rounded-full opacity-75"></div> {/* left-5 দিয়ে ওভারল্যাপ পজিশন সেট করুন */}
    </div>
  );
};

export default OverlappingCircles;