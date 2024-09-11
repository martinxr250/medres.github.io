import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLink = ({ href, children, className }) => {
  return (
    <Link to={href} className={`text-gray-400 hover:text-white ${className}`}>
      {children}
    </Link>
  );
};
