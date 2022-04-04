import React, { useEffect, useState } from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-8 w-3/4 mx-auto">
      <div>
        <h2 className="text-2xl ml-6 mb-4">chart 1</h2>
        <MyBarChart data={data} key={data.sell}></MyBarChart>
      </div>
    </div>
  );
};

export default Dashboard;
