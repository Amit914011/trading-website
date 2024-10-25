import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [rateOfReturn, setRateOfReturn] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [futureValue, setFutureValue] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateLumpsum = (e) => {
    e.preventDefault();

    const P = parseFloat(investment);
    const r = parseFloat(rateOfReturn) / 100;
    const t = parseFloat(timePeriod);

    // Lumpsum Future Value formula: A = P * (1 + r)^t
    const A = P * Math.pow(1 + r, t);
    setFutureValue(A.toFixed(2));

    // Prepare data for the Pie Chart
    const growth = A - P;
    setChartData({
      labels: ["Investment", "Growth"],
      datasets: [
        {
          data: [P.toFixed(2), growth.toFixed(2)],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    });

    // Calculate future value for each year up to the specified time period
    const data = [];
    for (let year = 1; year <= t; year++) {
      const futureValueYear = P * Math.pow(1 + r, year);
      data.push({
        year: year,
        futureValue: futureValueYear.toFixed(2),
        growth: (futureValueYear - P).toFixed(2),
      });
    }
    setYearlyData(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 pt-20">
      <div className="md:w-[60%] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Lumpsum Calculator</h2>

        <form onSubmit={calculateLumpsum} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Investment Amount (₹):</label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Rate of Return (Annual %):</label>
            <input
              type="number"
              value={rateOfReturn}
              onChange={(e) => setRateOfReturn(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Time Period (Years):</label>
            <input
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#291F93] text-white py-2 rounded-md hover:bg-blue-600"
          >
            Calculate
          </button>
        </form>

        {futureValue && (
          <div className="mt-4 p-4 bg-green-100 rounded-md text-green-700">
            <h3 className="text-lg font-semibold">
              Future Value: ₹{futureValue}
            </h3>
          </div>
        )}
      </div>

      {chartData && (
        <div className="w-[60%] bg-white p-36 mt-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">Investment vs Growth</h3>
          <Pie
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => `₹${tooltipItem.raw}`,
                  },
                },
              },
            }}
          />
        </div>
      )}

      {yearlyData.length > 0 && (
        <div className="w-[60%] bg-white mt-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">Future Value for Each Year</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Year</th>
                <th className="px-4 py-2 border">Future Value (₹)</th>
                <th className="px-4 py-2 border">Growth (₹)</th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.map((data) => (
                <tr key={data.year}>
                  <td className="px-4 py-2 border text-center">{data.year}</td>
                  <td className="px-4 py-2 border text-center">{data.futureValue}</td>
                  <td className="px-4 py-2 border text-center">{data.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LumpsumCalculator;
