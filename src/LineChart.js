import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChart = () => {
  const data = [
    { name: "Jan", line1: 4000, line2: 2400 },
    { name: "Feb", line1: 3000, line2: 1398 },
    { name: "Mar", line1: 2000, line2: 9800 },
    { name: "Apr", line1: 2780, line2: 3908 },
    { name: "May", line1: 1890, line2: 4800 },
    { name: "Jun", line1: 2390, line2: 3800 },
    { name: "Jul", line1: 3490, line2: 4300 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="line1" stroke="blue" />
      <Line type="monotone" dataKey="line2" stroke="red" />
    </LineChart>
  );
};

export default LineChart;
