import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-theme-dark min-h-screen text-white font-body">
      <div className="max-w-screen-xl mx-auto py-[100px] lg:py-[185px] px-6 xl:px-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
