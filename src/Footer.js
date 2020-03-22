import React from 'react';

export default function Footer() {
  return (
    <footer className=' bg-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 pt-5'>
            <div className='mb-3 d-flex justify-content-center'>
              <a className='fb-ic' href='!#'>
                <i className='fa fa-facebook-f fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                  {' '}
                </i>
              </a>
              <a className='tw-ic' href='!#'>
                <i className='fa fa-twitter fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                  {' '}
                </i>
              </a>
              <a className='gplus-ic' href='!#'>
                <i className='fa fa-google-plus text-dark mr-md-5 mr-3 fa-2x'></i>
              </a>
              <a className='li-ic' href='!#'>
                <i className='fa fa-linkedin fa-lg text-dark mr-md-5 mr-3 fa-2x'></i>
              </a>
              <a className='ins-ic' href='!#'>
                <i className='fa fa-instagram fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                  {' '}
                </i>
              </a>
              <a className='pin-ic' href='!#'>
                <i className='fa fa-pinterest fa-lg text-dark fa-2x'> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-copyright text-center pb-3'>
        © 2020 Copyright:
        <a className='text-white' href='https://24news.com/'>
          {' '}
          www.724news.com
        </a>
      </div>
    </footer>
  );
}
