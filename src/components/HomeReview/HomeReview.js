import React from 'react';

const HomeReview = ({ comment }) => {
  //   console.log(comment);
  const { name, body, picture, rating } = comment;
  return (
    <div>
      <img className="rounded-lg" src={picture} alt="" />
      <h2 className="font-bold mt-3">{name}</h2>
      <p>{body}</p>
      <p className="mt-5 font-semibold text-justify">Rating: {rating} star</p>
    </div>
  );
};

export default HomeReview;
