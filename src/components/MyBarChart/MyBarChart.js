import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const MyBarChart = ({ data }) => {
  console.log(data);
  return (
    <LineChart
      width={500}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  );
};

export default MyBarChart;
