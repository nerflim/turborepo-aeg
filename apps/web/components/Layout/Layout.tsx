import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-theme-dark min-h-screen text-white font-body">
      <div className="max-w-screen-xl mx-auto py-[185px]">{children}</div>
    </div>
  );
};

export default Layout;
