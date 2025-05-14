import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='py-6'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;