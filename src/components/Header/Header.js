import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
  return (
    <div className="mt-7 text-center">
      <nav className="flex justify-center">
        <CustomLink
          className="ml-4 duration-300 hover:text-red-500 py-2 px-3 uppercase font-bold"
          to="/"
        >
          Home
        </CustomLink>
        <CustomLink
          className="ml-4 py-2 duration-300 hover:text-red-500 px-3 uppercase font-bold"
          to="/reviews"
        >
          Reviews
        </CustomLink>
        <CustomLink
          className="ml-4 py-2 duration-300 px-3 hover:text-red-500 uppercase font-bold"
          to="/dashboard"
        >
          Dashboard
        </CustomLink>
        <CustomLink
          className="ml-4 py-2 duration-300 hover:text-red-500 px-3 uppercase font-bold"
          to="/blog"
        >
          Blog
        </CustomLink>
        <CustomLink
          className="ml-4 py-2 duration-300 hover:text-red-500 px-3 uppercase font-bold"
          to="/about"
        >
          About
        </CustomLink>
      </nav>
    </div>
  );
};

export default Header;
