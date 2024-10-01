import React, { useState, useEffect } from 'react';
import banner from '../assets/Banner.png'
import banner2 from '../assets/Banner2.png'
import topCut from '../assets/topcut.png'
import buttom from '../assets/bottomcut.png'
// import Card from './Card';
import Blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import EnquiryForm from './EnquiryForm';
import { FaChartLine, FaUsers } from 'react-icons/fa';
import Testimonial from './Testmonial';


const slides = [
  { id: 1, image: banner, text: 'Mastering the Markets: Proven Strategies for Trading Success' },
  { id: 2, image: banner2, text: 'Building Wealth Through Smart Investment: A Beginners Guide' },
 
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);



  
  return (
    <>
    {/* slider image section */}
      <div className="relative w-full banner overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-start p-16 ">
            <h2 className="text-[#3B3687] text-2xl w-[60%] md:text-[50px] leading-tight font-bold">{slide.text}</h2>
          </div>
        </div>
        
      ))}
    </div>    
    <div>
      <img src={topCut} alt="top cut" className="absolute bottom-0 left"/>
    </div>



    {/* aboutUs Section  */}


    <div className='w-full h-auto flex justify-center items-center'>
      <div className='w-[50%] h-auto flex flex-col justify-center items-center py-10'>
      
       <h1 className=' text-2xl uppercase font-bold underline mb-3'>About Us</h1>
      <p className='text-center text-xl'>
      Farhaan Meer Financial Investment Services was set up in 2005 to guide people towards financial freedom, by providing smart, practical investment answers to the tough money questions people have.
      </p>
      <button className='bg-[#231892] py-3 px-7 rounded-xl text-white text-xl hover:bg-blue-800 mt-5'>Learn More.</button>
      </div>
    </div>



    {/* Fixed Background Image */}


    <div className='backgroundImage'>
    <div className=' h-screen w-full justify-center items-center'>
      <img src={buttom} alt="" className='z-10' />
      <div className='w-full h-screen ' >
      <div className="min-h-screen  flex gap-5 items-center justify-center ">
      {/* First Card - Mutual Fund */}
      <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 w-80 shadow-md flex flex-col items-center">
        <FaChartLine className="text-[#231892] text-5xl mb-4" /> {/* Mutual Fund Icon */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mutual Fund</h2>
        <p className="text-gray-600 text-center">
          Invest in a diversified portfolio managed by experts.
        </p>
      </div>

      {/* Second Card - Investors */}
      <div className="bg-gray-50 border-gray-300 rounded-lg p-8 w-80 shadow-md flex flex-col items-center">
        <FaUsers className="text-[#231892] text-5xl mb-4" /> {/* Investors Icon */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Investors</h2>
        <p className="text-gray-600 text-center">
          Learn how to grow your wealth by making smart investments.
        </p>
      </div>
    </div>
      </div>
    </div>
    </div>
    



    {/* Blog Section  */}



    <section className=" py-14">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">BLOG & VIDEOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={Blog1}
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
            <h4 className='font-bold '>Get Our Exclusive Videos</h4>
            <br />
              <p className="text-gray-700">
              We are dedicated to providing investment management and strategic wealth planning that is right for you...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={blog2}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
            <h4 className='font-bold '>SIP vs STP vs SWP – Which One is Better?</h4>
            <br />
              <p className="text-gray-700">
              
              If you’re familiar with the idea of making monthly investments that eventually build into a significant corpus, you’ve likely...


              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={blog3}
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className='font-bold'>Difference Between SIP and Mutual Fund</h4>
              <br />
              <p className="text-gray-700">
              Investors are constantly seeking out better investment options. The two of the most popular options are Mutual Funds and...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>


      {/* Contact Us Form Here */}
      <EnquiryForm/>
      <Testimonial/>
    </div>
    
    </>
  );
};

export default Hero;
