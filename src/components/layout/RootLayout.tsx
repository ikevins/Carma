import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  useEffect(() => {
    document.title = 'Carma Aesthetics | Medical Spa in Winter Garden, FL';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;