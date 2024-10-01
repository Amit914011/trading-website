import React from 'react';
import farhaan from '../assets/Farhaan.jpg' // Assuming you have an image in your assets folder

const Aboutus = () => {
  return (
    <div className=" mx-auto mt-20 bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side: Image */}
      <div className="mb-6 md:mb-0">
        <img src={farhaan} alt="Sharia Investments" className="rounded-lg shadow-lg w-full"  width='100%' height='100%0'/>
      </div>

      {/* Right Side: Content */}
      <div className=" md:pl-8">
        <h2 className="text-3xl font-bold mb-8  text-center md:text-left uppercase">About </h2>

        {/* Vision Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-gray-700">
            To become the number one destination for Sharia-compliant investments.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-700">
            To educate people about the importance of Sharia-compliant investments and help them achieve their financial goals, fulfill their dreams, and become financially strong and self-reliant.
          </p>
        </div>

        {/* About Sharia Wealth Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">About Sharia Wealth</h3>
          <p className="text-gray-700">
            Farhan Meer realized that there is a lack of awareness among people regarding Sharia-compliant investments. People tend to keep their hard-earned money in conventional banking systems, fixed deposits, or insurance companies, unknowingly involving themselves in interest-based (Riba) transactions, which are considered one of the greatest sins in Islam.
          </p>
          <p className="text-gray-700 mt-2">
            Sharia Wealth was founded as a solution, aiming to educate people on how to shift from non-ethical investments (Haram) to ethical, permissible (Halal) methods. We offer financial planning for various life goals such as retirement, children's education and marriage, Hajj, purchasing a dream home, and more. Our goal is to ensure families grow financially strong while remaining true to their faith.
          </p>
          <p className="text-gray-700 mt-2 mb-5">
            We only recommend actions we apply to our own portfolios, ensuring trust and ethical practices. At Sharia Wealth, the number of happy families we serve is our true measure of success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
