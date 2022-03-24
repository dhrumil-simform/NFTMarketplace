import React from 'react'

import categoryCardData from './CategoryCardData'
import {CategoryCard} from '../Card/CategoryCard'
export const CategoryCards = () => {
  return (
    <div className='container category'>
      <h3 className='title my-5'>Browse by category</h3>
      <div className='row'>
        {categoryCardData.map((data) => {
          return (
              <CategoryCard   image={data.image} title={data.title}/>
          )
        })}
      </div>
    </div>
  )
}
