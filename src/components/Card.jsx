import React from 'react';
import { FaDollarSign, FaUsers } from 'react-icons/fa'; // Icons from react-icons

const TransparentCard = ({ title, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-transparent border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Icon className="text-blue-500 text-4xl mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
  );
};

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Grid for two cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* First Card: Funds */}
        <TransparentCard 
          title="Funds" 
          icon={FaDollarSign} 
        />
        {/* Second Card: Investors */}
        <TransparentCard 
          title="Investors" 
          icon={FaUsers} 
        />
      </div>
    </div>
  );
};

export default Card;
