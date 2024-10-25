import React from "react";
import { FaStar } from "react-icons/fa";
import blog1 from '../assets/Blogs/5 Powerful Concepts.pdf';
import blog2 from '../assets/Blogs/Are You Waiting for a Market Correction to Start Your SIP.pdf';
import blog3 from '../assets/Blogs/Children Education Mariage Expenses Calculation.pdf';
import blog4 from '../assets/Blogs/Cost of Delay.pdf';
import blog5 from '../assets/Blogs/Direct Vs Regular Plan.pdf';
import blog6 from '../assets/Blogs/Does Timing Work in Sip-All Sip Date.pdf';
import blog7 from '../assets/Blogs/Does Timing Work in Sip-Monthly High Low Nav.pdf';
import blog8 from '../assets/Blogs/Enhance Your Wealth Smart Strategies for ₹1 billion.pdf';
import blog9 from '../assets/Blogs/From Zero to Crore.pdf';
import blog10 from '../assets/Blogs/Is small savings worthy.pdf';
import blog11 from '../assets/Blogs/Is Timing the Market Interrupting Your SIP.pdf';
import blog12 from '../assets/Blogs/Limited Period SIP.pdf';
import blog13 from '../assets/Blogs/My business gives me better returns. Why should I invest in Mutual Funds.pdf';
import blog14 from '../assets/Blogs/Plan Your Future Today.pdf';
import blog15 from '../assets/Blogs/Power of Compounding.pdf';
import blog16 from '../assets/Blogs/Recover Your EMIs Through SIPs.pdf';
import blog17 from '../assets/Blogs/SIP Today, SWP Tomorrow1.pdf';
import blog18 from '../assets/Blogs/SIP Today, SWP Tomorrow.pdf';
import blog19 from '../assets/Blogs/Stopped SIP, What if SIP Continued.pdf';
import blog20 from '../assets/Blogs/Taxation on Mutual Funds.pdf';
import blog21 from '../assets/Blogs/Timing the Market-Lumpsum.pdf';

const Blog = () => {
  const portfolios = [
    { id: 1, name: "5 Powerful Concepts", category: "Blog", date: "2024-08-01", pdfUrl: blog1 },
    { id: 2, name: "Are You Waiting for a Market Correction to Start Your SIP", category: "Blog", date: "2023-09-25", pdfUrl: blog2 },
    { id: 3, name: "Children Education Marriage Expenses Calculation", category: "Blog", date: "2023-09-10", pdfUrl: blog3 },
    { id: 4, name: "Cost of Delay", category: "Blog", date: "2023-08-15", pdfUrl: blog4 },
    { id: 5, name: "Direct Vs Regular Plan", category: "Blog", date: "2023-07-01", pdfUrl: blog5 },
    { id: 6, name: "Does Timing Work in SIP - All SIP Date", category: "Blog", date: "2023-06-20", pdfUrl: blog6 },
    { id: 7, name: "Does Timing Work in SIP - Monthly High Low Nav", category: "Blog", date: "2023-05-15", pdfUrl: blog7 },
    { id: 8, name: "Enhance Your Wealth Smart Strategies for ₹1 billion", category: "Blog", date: "2023-04-10", pdfUrl: blog8 },
    { id: 9, name: "From Zero to Crore", category: "Blog", date: "2023-03-01", pdfUrl: blog9 },
    { id: 10, name: "Is Small Savings Worthy?", category: "Blog", date: "2023-02-15", pdfUrl: blog10 },
    { id: 11, name: "Is Timing the Market Interrupting Your SIP?", category: "Blog", date: "2023-01-10", pdfUrl: blog11 },
    { id: 12, name: "Limited Period SIP", category: "Blog", date: "2022-12-05", pdfUrl: blog12 },
    { id: 13, name: "My Business Gives Me Better Returns. Why Should I Invest in Mutual Funds?", category: "Blog", date: "2022-11-01", pdfUrl: blog13 },
    { id: 14, name: "Plan Your Future Today", category: "Blog", date: "2022-10-20", pdfUrl: blog14 },
    { id: 15, name: "Power of Compounding", category: "Blog", date: "2022-09-25", pdfUrl: blog15 },
    { id: 16, name: "Recover Your EMIs Through SIPs", category: "Blog", date: "2022-08-10", pdfUrl: blog16 },
    { id: 17, name: "SIP Today, SWP Tomorrow", category: "Blog", date: "2022-07-05", pdfUrl: blog17 },
    { id: 18, name: "SIP Today, SWP Tomorrow1", category: "Blog", date: "2022-06-15", pdfUrl: blog18 },
    { id: 19, name: "Stopped SIP, What if SIP Continued", category: "Blog", date: "2022-05-01", pdfUrl: blog19 },
    { id: 20, name: "Taxation on Mutual Funds", category: "Blog", date: "2022-04-20", pdfUrl: blog20 },
    { id: 21, name: "Timing the Market - Lumpsum", category: "Blog", date: "2022-03-15", pdfUrl: blog21 },
  ];

  const openPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 pt-28">
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Portfolio List</h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm md:text-base">
                <th className="p-3 text-left">Star</th>
                <th className="p-3 text-left">Portfolio Name</th>
                <th className="p-3 text-left hidden md:table-cell">Category</th>
                <th className="p-3 text-left hidden md:table-cell">Uploaded Date</th>
                <th className="p-3 text-left">View</th>
              </tr>
            </thead>
            <tbody>
              {portfolios.map((portfolio) => (
                <tr key={portfolio.id} className="border-b text-xs md:text-sm">
                  <td className="p-3">
                    <FaStar className="text-yellow-500" />
                  </td>
                  <td className="p-3">{portfolio.name}</td>
                  <td className="p-3 hidden md:table-cell">{portfolio.category}</td>
                  <td className="p-3 hidden md:table-cell">{portfolio.date}</td>
                  <td className="p-3">
                    <button
                      onClick={() => openPDF(portfolio.pdfUrl)}
                      className="bg-[#291F93] text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-blue-800 text-xs md:text-sm"
                    >
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

export default Blog;
