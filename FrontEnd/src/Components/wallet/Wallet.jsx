import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'

import './wallet.css'
export const Wallet = () => {
  return (
    <div className='wallet'>
      <div className='wallet-header border-bottom'>
        <p className='Wallet-name fs-2'>
          <span className='profile-avtar me-3'>
            <BsPersonCircle size={36} />
          </span>
          My Wallet
        </p>
      </div>
      <div className='wallet-body'>
        <p className='text subheading'>
          Connect with one of our available wallet providers or create a new
          one.
        </p>
        <a
          type='button'
          href='/metamasklanding'
          className='btn btn-primary my-5'
        >
          MetaMask
        </a>
      </div>
    </div>
  )
}
