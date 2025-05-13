import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';

const Root = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  );
};

export default Root;