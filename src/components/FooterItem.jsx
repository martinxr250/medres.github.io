import React from 'react';

export const FooterItem = ({ children, className }) => {
  return (
    <div className={`mx-2 ${className}`}>
      {children}
    </div>
  );
};
