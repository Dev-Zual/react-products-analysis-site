import React from 'react';
import useComments from '../../hooks/useComments';
import SingleComment from '../SingleComment/SingleComment';

const Reviews = () => {
  const [comments, setComments] = useComments();
  return (
    <div>
      <h1 className="text-4xl mt-11 font-semibold text-center">
        <h1 className="text-4xl mb-8 mt-11 text-sky-500 font-semibold text-center">
          What Our Customer Says!!!
        </h1>
      </h1>
      <div className="grid md:grid-cols-3 gap-6 mt-10 w-3/4 mx-auto">
        {comments.map((comment) => (
          <SingleComment comment={comment} key={comment.id}></SingleComment>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
