import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import React from 'react';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
