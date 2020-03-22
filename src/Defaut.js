import React from 'react';

export default function Default() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main'>
          <div className='row'>
            <div className='col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1'>
              <h1 className='m-0'>404</h1>
              <h6>Page not found</h6>
              <p>
                Lorem ipsum dolor sit <span className='text-info'>amet</span>,
                consectetur <span className='text-info'>adipisicing</span> elit,
                sed do eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
