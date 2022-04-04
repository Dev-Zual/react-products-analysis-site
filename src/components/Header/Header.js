import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="mt-7 text-center">
      <nav>
        <Link
          className="ml-4 duration-300 hover:text-red-500 py-2 px-3 uppercase font-bold"
          to="/"
        >
          Home
        </Link>
        <Link
          className="ml-4 py-2 duration-300 hover:text-red-500 px-3 uppercase font-bold"
          to="/reviews"
        >
          Reviews
        </Link>
        <Link
          className="ml-4 py-2 duration-300 px-3 hover:text-red-500 uppercase font-bold"
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="ml-4 py-2 duration-300 hover:text-red-500 px-3 uppercase font-bold"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="ml-4 py-2 duration-300 hover:text-red-500 px-3 uppercase font-bold"
          to="/about"
        >
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
