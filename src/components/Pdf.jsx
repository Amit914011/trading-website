import React from 'react';

const Pdf = [
  {
    portfolioName: 'All Weather Investing',
    category: 'Readymade Presentation',
    uploadedDate: '17-09-2024',
  },
  {
    portfolioName: 'Explore Investment Opportunities in Banking & Financial Services',
    category: 'Readymade Presentation',
    uploadedDate: '06-06-2024',
  },
  {
    portfolioName: 'Unravel the Growth Enigma: Explore HDFC Focused 30 Fund',
    category: 'Readymade Presentation',
    uploadedDate: '27-06-2024',
  },
  {
    portfolioName: 'Monthly Newsletter_July\'24',
    category: 'Newsletter',
    uploadedDate: '02-07-2024',
  },
  {
    portfolioName: 'A Strategic Framework for Capital Appreciation with Prudent Risk Management',
    category: 'Readymade Presentation',
    uploadedDate: '12-07-2024',
  },
  // Add more data as per your requirement
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Portfolio Name</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Uploaded Date</th>
                <th className="py-2 px-4 text-left">View</th>
              </tr>
            </thead>
            <tbody>
              {Pdf.map((item, index) => (
                <tr key={index} className="border-t hover:bg-blue-50">
                  <td className="py-2 px-4">{item.portfolioName}</td>
                  <td className="py-2 px-4">{item.category}</td>
                  <td className="py-2 px-4">{item.uploadedDate}</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
