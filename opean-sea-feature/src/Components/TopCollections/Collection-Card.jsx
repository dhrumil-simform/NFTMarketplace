import React from 'react'
import './Collection-Card.css'
export const TopCollection = () => {
  return (
    <div className='collection-card m-2'>
      <span className='inline-block fs-3 me-4'>1</span>
      <div className='container-info mx-2'>
        <div className='container-avtar'>
          <img
            src='https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f'
            style={{ borderRadius: ' 50%', width: ' 60px' }}
            className='card-img-avtar'
            alt='avtar-url'
          />
        </div>
        <div className='mx-3'>
          <h6 className='card-title mb-0 fs-3 text-start'>Card title</h6>
          <p className='text text-muted mb-0 fs-4'>
            Floor price:
            <span className='icon'>
              <svg
                className='bi bi-bootstrap-fill mx-2'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z' />
                <path d='M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z' />
              </svg>
            </span>
            <span className='value m-0'>20.0</span>
          </p>
        </div>
      </div>
      <div className='market-value ms-3 fs-4'>
        <p className='text m-0'>+363.19%</p>
        <p className='text m-0'>
          <span className='icon'>
            <svg
              className='bi bi-bootstrap-fill me-2'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z' />
              <path d='M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z' />
            </svg>
          </span>
          <span className='value'>436.32</span>
        </p>
      </div>
    </div>
  )
}
