import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "Week 1", line1: 250, line2: 352 },
    { name: "Week 2", line1: 412, line2: 200 },
    { name: "Week 3", line1: 125, line2: 325 },
    { name: "Week 4", line1: 455, line2: 490 },
  ];

  return (
    <div style={{ width: "180%", height: "100%", backgroundColor: "white" }}>
      <ResponsiveContainer width="95%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="line1" stroke="blue" />
          <Line type="monotone" dataKey="line2" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
