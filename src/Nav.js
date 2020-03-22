import React, { useContext } from 'react';
import $ from 'jquery';
import { ArticleContext } from './Context';
import { Link } from 'react-router-dom';

export default function Nav() {
  const data = useContext(ArticleContext);

  const { handleSearch } = data;
  $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() === 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });

  function adjustNav() {
    let winWidth = $(window).width(),
      dropdown = $('.dropdown'),
      dropdownMenu = $('.dropdown-menu');

    if (winWidth >= 768) {
      dropdown.on('mouseenter', function() {
        $(this)
          .addClass('show')
          .children(dropdownMenu)
          .addClass('show');
      });

      dropdown.on('mouseleave', function() {
        $(this)
          .removeClass('show')
          .children(dropdownMenu)
          .removeClass('show');
      });
    } else {
      dropdown.off('mouseenter mouseleave');
    }
  }

  $(window).on('resize', adjustNav);

  adjustNav();
  return (
    <>
      <header className='header-area overlay'>
        <nav className='navbar navbar-expand-md navbar-dark'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
                724news.com
            </Link>

            <button
              type='button'
              className='navbar-toggler collapsed'
              data-toggle='collapse'
              data-target='#main-nav'
            >
              <span className='menu-icon-bar'></span>
              <span className='menu-icon-bar'></span>
              <span className='menu-icon-bar'></span>
            </button>

            <div id='main-nav' className='collapse navbar-collapse'>
              <ul className='navbar-nav ml-auto'>
                <li>
                  <Link to='/articles' className='nav-item nav-link'>
                    News
                  </Link>
                </li>

                <li>
                  <a href='!#' type='button' className='nav-item nav-link'>
                    Sign Up
                  </a>
                </li>
              </ul>
              <div className='form-inline ml-3'>
                <input
                  className='form-control mr-sm-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  onChange={e => {
                    handleSearch(e);
                  }}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
