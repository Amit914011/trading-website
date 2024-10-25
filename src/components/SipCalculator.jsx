import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [rateOfReturn, setRateOfReturn] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [totalAmount, setTotalAmount] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const calculateSIP = (e) => {
    e.preventDefault();

    const P = parseFloat(monthlyInvestment);
    const annualRate = parseFloat(rateOfReturn) / 100;
    const r = annualRate / 12;
    const n = Math.min(parseFloat(timePeriod) * 12, 2400); // Limit to 200 years or 2400 months

    let totalInvested = 0;
    let futureValue = 0;
    const data = [];
    const table = [];

    for (let i = 1; i <= n; i++) {
      totalInvested += P;
      futureValue = futureValue * (1 + r) + P;

      // Add data for chart every 12 months and table every year (up to 100 years)
      if (i % 12 === 0 || i === n) {
        const year = i / 12;
        data.push({
          month: year,
          TotalInvestment: parseFloat(totalInvested.toFixed(2)),
          TotalWealth: parseFloat(futureValue.toFixed(2)),
        });

        // For table data up to 100 years
        if (year <= 100) {
          table.push({
            year,
            TotalInvestment: parseFloat(totalInvested.toFixed(2)),
            TotalWealth: parseFloat(futureValue.toFixed(2)),
          });
        }
      }
    }

    setTotalAmount(futureValue.toFixed(2));
    setChartData(data);
    setTableData(table);
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full pt-20 justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md md:w-[60%]">
        <h2 className="text-2xl font-bold mb-4 text-center">SIP Calculator</h2>

        <form onSubmit={calculateSIP} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 text-gray-700">
                Monthly Investment (₹):
              </label>
              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">
                Rate of Return (Annual %):
              </label>
              <input
                type="number"
                value={rateOfReturn}
                onChange={(e) => setRateOfReturn(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">
                Time Period (Years):
              </label>
              <input
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#291F93] text-white py-2 rounded-md hover:bg-blue-600"
          >
            Calculate
          </button>
        </form>

        {totalAmount && (
          <>
            <div className="mt-4 p-4 bg-green-100 rounded-md text-green-700">
              <h3 className="text-lg font-semibold">
                Future Value: ₹{totalAmount}
              </h3>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Investment Growth Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis
                    dataKey="month"
                    label={{ value: "Years", position: "insideBottomRight", offset: -5 }}
                  />
                  <YAxis
                    label={{ value: "Amount (₹)", angle: -90, position: "insideLeft" }}
                  />
                  <Tooltip formatter={(value) => `₹${value}`} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="TotalInvestment"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="TotalWealth"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Table for Yearly Results */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Yearly Investment Breakdown</h3>
              <table className="min-w-full bg-white rounded-md shadow-md">
                <thead>
                  <tr className="bg-[#291F93] text-white">
                    <th className="py-2 px-4 text-left">Year</th>
                    <th className="py-2 px-4 text-left">Total Investment (₹)</th>
                    <th className="py-2 px-4 text-left">Total Wealth (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.year} className="border-t">
                      <td className="py-2 px-4">{row.year}</td>
                      <td className="py-2 px-4">{row.TotalInvestment}</td>
                      <td className="py-2 px-4">{row.TotalWealth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SipCalculator;
