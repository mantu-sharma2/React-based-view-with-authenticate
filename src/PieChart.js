import React from "react";
import { Chart } from "react-google-charts";
import { ResponsiveContainer } from "recharts";

export const data = [
  ["Task", "Hours per Day"],
  ["Basic Trees", 55],
  ["Custom Short pants", 31],
  ["Super Hoodies", 14],
];

export const options = {
  title: "My Daily Activities",
};

const PieChart = () => {
  return (
    <div style={{ width: "100%", height: "50%" }}>
      <ResponsiveContainer>
        <Chart chartType="PieChart" data={data} options={options} />
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
