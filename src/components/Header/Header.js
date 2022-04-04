import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mt-7">
      <nav>
        <Link className="ml-4 py-2 px-3 uppercase font-semibold" to="/">
          Home
        </Link>
        <Link className="ml-4 py-2 px-3 uppercase font-semibold" to="/reviews">
          Reviews
        </Link>
        <Link
          className="ml-4 py-2 px-3 uppercase font-semibold"
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link className="ml-4 py-2 px-3 uppercase font-semibold" to="/blog">
          Blog
        </Link>
        <Link className="ml-4 py-2 px-3 uppercase font-semibold" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
