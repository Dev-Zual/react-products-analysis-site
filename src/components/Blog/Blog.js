import React from 'react';

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto mt-12 grid md:grid-cols-2 gap-6 sm:grid-cols-1">
      <div>
        {' '}
        <h1 className="text-3xl font-semibold">What is context API?</h1>
        <p className="mt-6 text-slate-600 font-semibold">
          The Context API is a React structure. It allows us to solve
          prop-drilling from all levels of our application.It provides a way to
          pass data through the component tree without having to pass props down
          manually at every level.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold"> What is a semantic tag?</h1>
        <p className="mt-6 text-slate-600 font-semibold">
          A semantic element clearly describes its meaning to both the browser
          and the developer. Semantic element is much easier to read.Search
          engines and assistive technologies are also able to better understand
          the context and content of your website, meaning a better experience
          for your users.
        </p>
      </div>
    </div>
  );
};

export default Blog;
