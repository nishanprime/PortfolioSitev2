import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

const index = () => {
  return (
    <div>
      <Head>
        <title>Nishan | Fullstack Engineer</title>
        <meta name="description" content="Nishan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <Navbar />
      </Head>
    </div>
  );
};

export default index;
