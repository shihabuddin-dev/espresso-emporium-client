import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';

const Root = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  );
};

export default Root;