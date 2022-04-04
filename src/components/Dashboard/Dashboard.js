import React, { useEffect, useState } from 'react';
import Chart2 from '../Chart2/Chart2';
import Chart3 from '../Chart3/Chart3';
import Chart4 from '../Chart4/Chart4';
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
        <h2 className="text-2xl ml-6 mb-4 uppercase font-semibold text-sky-500">
          Month Wise Sell
        </h2>
        <MyBarChart data={data} key={data.sell}></MyBarChart>
      </div>
      <div>
        <h2 className="text-2xl ml-6 mb-4 uppercase font-semibold text-sky-500">
          investment vs revenue
        </h2>
        <Chart2 data={data} key={data.sell}></Chart2>
      </div>
      <div>
        <h2 className="text-2xl ml-6 mb-4 uppercase font-semibold text-sky-500">
          investment
        </h2>
        <Chart3 data={data} key={data.sell}></Chart3>
      </div>
      <div>
        <h2 className="text-2xl ml-6 mb-4 uppercase font-semibold text-sky-500">
          Revenue
        </h2>
        <Chart4 data={data} key={data.sell}></Chart4>
      </div>
    </div>
  );
};

export default Dashboard;
