import React from 'react';
import Carosel from './Carosel';
import Article from './Article';
import Pagination from './Pagination';
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <div className='container'>
        <Carosel />
        <Article />
        <Pagination />
      </div>
      <Footer />
    </>
  );
}
