import React from 'react';

const Healthins = () => {
  return (
    <div className="w-full mt-24 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Blue border at the top */}
      <div className="w-full h-2 bg-[#231892]"></div>
      
      {/* Content Section */}
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#231892]">Health Insurance</h2>
        <p className="text-gray-700 mb-6">
        Health insurance is a contract between an individual and an insurance company that covers medical expenses arising from illnesses, accidents, or injuries.
         This essential form of financial protection ensures that, in the event of a medical emergency or necessary treatment, the insured can focus on recovery without the added burden of overwhelming healthcare costs..</p>
         <h1 className='font-semibold'>Why Health Insurance Is Important</h1>
         <br />
         <p>Medical expenses have been on the rise globally, making healthcare unaffordable for many without the support of insurance.
           Health insurance provides the financial assistance needed to cover doctor visits, hospital stays, surgeries, prescription medications, and preventive care, such as vaccinations and screenings.</p>
         <br />

        {/* App Link Button */}
        <a href="https://flow.assetplus.in/client_onboarding/?advisor=626d11e27f484f0008f1a4ac" target='blank' className="bg-[#231892] text-white mb-11 px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Get the App
        </a>
      </div>
    </div>
  );
};

export default Healthins;
