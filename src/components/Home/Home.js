import React from 'react';

const Home = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-12 mt-10">
      <div className="slider-text md:col-span-7">
        <h1>Your Best Apple </h1>
        <h1>Laptop Is Here</h1>
      </div>
      <div className="slider-img md:col-span-5">
        <img
          className="w-80"
          src="https://www.bdstall.com/asset/product-image/giant_57855.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
