import React from 'react';

export const Footer = ({ className, children }) => {
  return (
    <footer className={`bg-black text-white ${className}`}>
      {children}
    </footer>
  );
};
