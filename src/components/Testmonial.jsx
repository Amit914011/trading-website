import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/100",
    message: "This service is amazing. It helped me a lot.",
    position: "CEO, Company A"
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/100",
    message: "Absolutely wonderful! Highly recommended.",
    position: "Manager, Company B"
  },
  {
    name: "Samuel Green",
    image: "https://via.placeholder.com/100",
    message: "I was blown away by the quality and support.",
    position: "Founder, Startup C"
  },
  {
    name: "Emily Brown",
    image: "https://via.placeholder.com/100",
    message: "Exceptional experience with this team.",
    position: "CTO, Tech D"
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two testimonials at a time
    slidesToScroll: 1, // Scroll one testimonial at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-6 bg-white shadow-lg rounded-lg mx-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-semibold mb-2">{testimonial.name}</p>
            <p className="text-gray-600 italic mb-4">"{testimonial.message}"</p>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
