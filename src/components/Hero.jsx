import React, { useState, useEffect } from 'react';
import banner2 from '../assets/image123.png'
import mobilebanner from '../assets/blogimage/grow2.png'

// import Card from './Card';
import Blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import EnquiryForm from './EnquiryForm';
// import { FaChartLine, FaUsers } from 'react-icons/fa';
// import Testimonial from './Testmonial';
import { GiReceiveMoney } from "react-icons/gi";
import { TbDatabaseDollar } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";


const slides = [
  // { id: 1, image: banner, text: 'Mastering the Markets: Proven Strategies for Trading Success' },
  { id: 2, image: banner2, text: '' },
 
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);




  // our service

  
  
  return (
    <>
    {/* slider image section */}
      <div className="relative w-full banner overflow-hidden">
      <img src={banner2} alt="" className='w-full hidden md:block' />
      <img src={mobilebanner} alt="" className='w-full h-[400px]' />
      
    </div>    
    {/* <div>
      <img src={topCut} alt="top cut" className="absolute bottom-0 left"/>
    </div> */}



    {/* aboutUs Section  */}


    <div className='w-full h-auto flex justify-center items-center'>
      <div className='md:w-[50%] h-auto flex flex-col justify-center items-center py-10'>
      
       <h1 className=' text-2xl uppercase font-bold  mb-3'>About Us</h1>
      <p className='text-center text-xl'>
      Farhaan Meer Financial Investment Services was set up in 2005 to guide people towards financial freedom, by providing smart, practical investment answers to the tough money questions people have.
      </p>
      <button className='bg-[#231892] py-3 px-7 rounded-xl text-white text-xl hover:bg-blue-800 mt-5'>Learn More.</button>
      </div>
    </div>







    {/* Fixed Background Image */}


    <div className=''>
    <div className=' w-full justify-center items-center mb-36'>
      <div className='w-full h-[200px] bg-[#231892] pt-16 text-center uppercase text-xl md:text-2xl lg:text-3xl text-white font-bold md:px-20 px-10'> 
        <h1 className='mb-7'>Our <span>Service</span></h1>
        <div className='w-full h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
        <div className='w-full h-[200px] bg-white rounded-md shadow-lg flex justify-center items-center flex-col'>
        <GiReceiveMoney className='text-[#231892] text-[50px]'/>
        <h1 className='text-gray-800 text-[20px]'> Mutual Fund</h1>
        </div>
        <div className='w-full h-[200px] bg-white rounded-md shadow-lg flex justify-center items-center flex-col'>
        <TbDatabaseDollar  className='text-[#231892] text-[50px]'/>
        <h1 className='text-gray-800 text-[20px]'> Tax Sarvers</h1>
        </div>
        <div className='w-full h-[200px] bg-white rounded-md shadow-lg flex justify-center items-center flex-col'>
        <FaHandHoldingHeart  className='text-[#231892] text-[50px]'/>
        <h1 className='text-gray-800 text-[20px]'>Health insurance</h1>
        </div>
        <div className='w-full h-[200px] bg-white rounded-md shadow-lg flex justify-center items-center flex-col'>
        <FaGraduationCap  className='text-[#231892] text-[50px]'/>
        <h1 className='text-gray-800 text-[20px]'>Investor education</h1>
        </div>
        </div> 
      </div>

    </div>
    </div>
   



    {/* Blog Section  */}
    <section className=" py-14 md:px-28 px-10 mt-[750px] md:mt-[320px] lg:mt-0">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-xl font-bold text-center mb-8">BLOG & VIDEOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Card 1 */}
          <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
           <a href="https://www.youtube.com/@thefarhanmeer">
           <img
              src={Blog1}
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
           </a>
            <div className="p-4">
           <a href="https://www.youtube.com/@thefarhanmeer">
            <h4 className='font-bold '>Get Our Exclusive Videos</h4>
            </a> 
            <br />
              <a href="https://www.youtube.com/@thefarhanmeer">
              <p className="text-gray-700">
              We are dedicated to providing investment management and strategic wealth planning that is right for you...
              </p>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <a href="https://www.youtube.com/@thefarhanmeer">
            <img
              src={blog2}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            </a>
            <div className="p-4">
            <a href="https://www.youtube.com/@thefarhanmeer">
            <h4 className='font-bold '>SIP vs STP vs SWP – Which One is Better?</h4>
            </a>
            <br />
            <a href="https://www.youtube.com/@thefarhanmeer">
            
              <p className="text-gray-700">
              
              If you’re familiar with the idea of making monthly investments that eventually build into a significant corpus, you’ve likely...


              </p>
            </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <a href="https://www.youtube.com/@thefarhanmeer">
          
            <img
              src={blog3}
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
          </a>
            <div className="p-4">
              <a href="https://www.youtube.com/@thefarhanmeer">
              <h4 className='font-bold'>Difference Between SIP and Mutual Fund</h4>
              </a>
              <br />
              <a href="https://www.youtube.com/@thefarhanmeer">
              <p className="text-gray-700">
              Investors are constantly seeking out better investment options. The two of the most popular options are Mutual Funds and...
              </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Contact Us Form Here */}
      

    
    </>
  );
};

export default Hero;
