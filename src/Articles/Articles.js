import React from 'react';
import Article from '../HomPage/Article';
import Footer from '../Footer';
import Pagination from '../HomPage/Pagination';

export default function Articles() {
  return (
    <>
      <div className='container'>
        <Article />
        <Pagination />
      </div>
      <Footer />
    </>
  );
}
