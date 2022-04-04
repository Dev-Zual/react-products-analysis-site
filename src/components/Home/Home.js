import React from 'react';
import { Link } from 'react-router-dom';
import useComments from '../../hooks/useComments';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
  const [comments, setComments] = useComments();
  // let sliceComments;
  // if (comments > 3) {
  //   sliceComments = comments.slice(0, 3);
  // }
  const sliceComments = comments.slice(0, 3);
  return (
    <div>
      <div className="w-3/4 mx-auto grid sm:grid-cols-1 md:grid-cols-12 mt-10">
        <div className="slider-text md:col-span-7">
          <h1 className="font-bold text-7xl">Your Best Apple </h1>
          <h1 className="font-bold text-7xl text-sky-500">Laptop Is Here</h1>
          <p className="mt-9 font-semibold text-slate-600">
            Just Control Your Mind, Then You Can Do Anything. We Have to More
            Hard Work For Success.
          </p>
          <button className="py-3 px-5 bg-red-300 rounded-md mt-10 text-white font-bold hover:bg-red-400 transition-all">
            See More
          </button>
        </div>
        <div className="slider-img col-span-5">
          <img
            className="w-80 mr-0 ml-16"
            src="https://www.bdstall.com/asset/product-image/giant_57855.jpg"
            alt=""
          />
        </div>
      </div>
      <section className="w-3/4 mx-auto mt-10">
        <h1 className="text-4xl mt-11 font-semibold text-center">
          Customer Review
        </h1>
        <div className="grid md:grid-cols-3 gap-6 mt-7">
          {sliceComments.map((comment) => (
            <HomeReview comment={comment} key={comment.id}></HomeReview>
          ))}
        </div>
        <div className="flex justify-center mb-8">
          <Link to="/reviews">
            <button className="bg-red-300 text-white font-bold py-1 rounded mt-6 px-7">
              See All Review
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
