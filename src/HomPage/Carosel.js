import React, { useContext } from 'react';
import { ArticleContext } from '../Context';

export default function Carosel() {
  const { pictures } = useContext(ArticleContext);

  const max = pictures.length;
  const getRandomPictures = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <div className='banner'>
      <div className='container-fluid px-0'>
        <div id='magicCarousel' className='carousel slide' data-ride='carousel'>
          {/* <!--    Carousel Indicators    --> */}
          <ol className='carousel-indicators'>
            <li
              data-target='#magicCarousel'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#magicCarousel' data-slide-to='1'></li>
            <li data-target='#magicCarousel' data-slide-to='2'></li>
            <li data-target='#magicCarousel' data-slide-to='3'></li>
          </ol>

          {/* <!--    Carousel Slider    --> */}
          <div className='carousel-inner' role='listbox'>
            <div className='carousel-item active'>
              <img
                src={pictures[getRandomPictures(max)]}
                className='d-block w-100'
                alt='slide1'
              />
              <div className='carousel-caption'>
                <h3>Slide 01</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                </p>
              </div>
            </div>

            <div className='carousel-item'>
              <img
                src={pictures[getRandomPictures(max)]}
                className='d-block w-100'
                alt='slide2'
              />
              <div className='carousel-caption'>
                <h3>Slide 02</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className='carousel-item'>
              <img
                src={pictures[getRandomPictures(max)]}
                className='d-block w-100'
                alt='slide3'
              />
              <div className='carousel-caption'>
                <h3>Slide 03</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  exercitationem quibusdam modi!
                </p>
              </div>
            </div>

            <div className='carousel-item'>
              <img
                src={pictures[getRandomPictures(max)]}
                className='d-block w-100'
                alt='slide4'
              />
              <div className='carousel-caption'>
                <h3>Slide 04</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  placeat?
                </p>
              </div>
            </div>

            {/* <!--     Carousel Controls     --> */}
            <a
              href='#magicCarousel'
              className='carousel-control-prev'
              role='button'
              data-slide='prev'
            >
              <span className='carousel-control-prev-icon'></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              href='#magicCarousel'
              className='carousel-control-next'
              role='button'
              data-slide='next'
            >
              <span className='carousel-control-next-icon'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
