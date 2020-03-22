import React, { useContext } from 'react';
import { ArticleContext } from '../Context';

export default function Pagination() {
  const {
    articlePerPage,
    currentPage,
    filteredArticles,
    paginate,
    previous,
    next
  } = useContext(ArticleContext);
  let pageNumbers = [];
  const pages = Math.ceil(filteredArticles.length / articlePerPage);

  for (let i = 1; i < pages + 1; i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return (
    <nav className='my-5'>
      <ul className='pagination pagination-lg justify-content-center'>
        {currentPage === 1 ? null : (
          <li className='page-item'>
            <span
              onClick={previous}
              className='page-link'
              aria-label='Previous'
            >
              <span aria-hidden='true'>&laquo;</span>
            </span>
          </li>
        )}
        {pageNumbers.map(pg => {
          return (
            <li className='page-item' key={pg}>
              <span
                className={
                  pg === currentPage
                    ? 'page-link bg-primary text-white'
                    : 'page-link'
                }
                onClick={n => {
                  paginate(pg);
                }}
              >
                {pg}
              </span>
            </li>
          );
        })}

        {currentPage === pages ? null : (
          <li className='page-item'>
            <span onClick={next} className='page-link' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
}
