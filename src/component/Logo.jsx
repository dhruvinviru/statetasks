import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="brand">
      <img
        src="/assets/statetasks-logo.svg"
        alt="StateTasks logo"
        className="brand-logo"
      />
      <span className="brand-title">StateTasks</span>
    </Link>
  );
};

export default Logo;
