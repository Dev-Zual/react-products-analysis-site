import React, { useEffect, useState } from 'react';
import Chart2 from '../Chart2/Chart2';
import MyBarChart from '../MyBarChart/MyBarChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-8 w-3/4 mx-auto grid sm:grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <h2 className="text-2xl ml-6 mb-4">chart 1</h2>
        <MyBarChart data={data} key={data.sell}></MyBarChart>
      </div>
      <div>
        <h2 className="text-2xl ml-6 mb-4">chart 2</h2>
        <Chart2 data={data} key={data.sell}></Chart2>
      </div>
    </div>
  );
};

export default Dashboard;
