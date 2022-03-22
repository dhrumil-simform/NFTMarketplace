import React from 'react'
import { TopCollection } from './Collection-Card'
const TopCollections = () => {
  return (
    <div className='container text-center'>
      <h3 className='heading-tertiary mt-5'>
        Top collections over last 7 days expand_more
      </h3>
      <div className='d-flex flex-wrap justify-content-center'>
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
        <TopCollection />
      </div>
    </div>
  )
}

export default TopCollections
