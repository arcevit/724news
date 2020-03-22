import React from 'react';

export default function Loading() {
  return (
    <div className='col my-3'>
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  );
}
