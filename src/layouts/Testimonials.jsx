import React from 'react';

const TestimonialCard = ({ image, name, title, rating, testimonial }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-gray-600 text-center mb-4">{testimonial}</p>
      <div className="flex justify-between w-full">
        <button className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center">
          ←
        </button>
        <button className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
          →
        </button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        What The People Thinks About Us
      </h2>
      <TestimonialCard
        image="path/to/image.jpg"
        name="Lukan Depina"
        title="CEO and Head of Idea"
        rating={5}
        testimonial="Lesser replenish bearing they're him cattle kind dominion. You which fill place. Land she'd subdue divided gathering blessed seasons it. Without, wherein days."
      />
    </div>
  );
};

export default Testimonials;