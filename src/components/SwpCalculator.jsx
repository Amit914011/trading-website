import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SwpCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [rateOfReturn, setRateOfReturn] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [totalWithdrawal, setTotalWithdrawal] = useState(null);
  const [remainingAmount, setRemainingAmount] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [yearlyData, setYearlyData] = useState(null);

  const calculateSWP = (e) => {
    e.preventDefault();

    const P = parseFloat(initialInvestment);
    const r = parseFloat(rateOfReturn) / 100;
    const t = parseFloat(timePeriod);
    const w = parseFloat(withdrawalAmount);

    let remainingBalance = P;
    let totalWithdrawn = 0;
    const yearData = [];

    for (let i = 1; i <= t; i++) {
      const growth = remainingBalance * r;  // Annual growth
      remainingBalance += growth;  // Add growth
      remainingBalance -= w;  // Subtract withdrawal
      totalWithdrawn += w;

      // Store data for the first 5 years
      if (i <= 5) {
        yearData.push({
          year: i,
          balance: remainingBalance > 0 ? remainingBalance.toFixed(2) : 0,
          growth: growth.toFixed(2),
          withdrawal: w.toFixed(2),
        });
      }

      // Stop if remaining balance is depleted
      if (remainingBalance <= 0) {
        remainingBalance = 0;
        totalWithdrawn = P + (growth - w);  // Adjust for final withdrawal
        break;
      }
    }

    setTotalWithdrawal(totalWithdrawn.toFixed(2));
    setRemainingAmount(remainingBalance.toFixed(2));
    setYearlyData(yearData);

    // Prepare data for Pie Chart
    setChartData({
      labels: ["Total Withdrawn", "Remaining Amount"],
      datasets: [
        {
          data: [totalWithdrawn.toFixed(2), remainingBalance.toFixed(2)],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    });
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-4 pt-24">
      <div className="w-[60%] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">SWP Calculator</h2>

        <form onSubmit={calculateSWP} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Initial Investment (₹):</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
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
            <label className="block mb-1 text-gray-700">Withdrawal Amount (₹ per year):</label>
            <input
              type="number"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
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
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Calculate
          </button>
        </form>

        {totalWithdrawal && remainingAmount && (
          <div className="mt-4 p-4 bg-green-100 rounded-md text-green-700">
            <h3 className="text-lg font-semibold">Total Withdrawn: ₹{totalWithdrawal}</h3>
            <h3 className="text-lg font-semibold">Remaining Balance: ₹{remainingAmount}</h3>
          </div>
        )}
      </div>

      {yearlyData && (
        <div className="w-[60%] bg-white p-6 mt-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">SWP Data (First 5 Years)</h3>
          <table className="min-w-full table-auto bg-white border border-gray-300 rounded-md">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Year</th>
                <th className="px-4 py-2 border">Growth (₹)</th>
                <th className="px-4 py-2 border">Withdrawal (₹)</th>
                <th className="px-4 py-2 border">Remaining Balance (₹)</th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.map((data, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{data.year}</td>
                  <td className="px-4 py-2 border">{data.growth}</td>
                  <td className="px-4 py-2 border">{data.withdrawal}</td>
                  <td className="px-4 py-2 border">{data.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {chartData && (
        <div className="w-[60%] bg-white p-28 mt-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">SWP Overview</h3>
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
    </div>
  );
};

export default SwpCalculator;
