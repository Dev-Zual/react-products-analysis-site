import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart2 = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="month" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: '#f5f5f5',
          border: '1px solid #d5d5d5',
          borderRadius: 3,
          lineHeight: '40px',
        }}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="sell" fill="#8884d8" barSize={30} />
    </BarChart>
  );
};

export default Chart2;
