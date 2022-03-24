import React from 'react'
import './Explore.css'
import { ExploreCard } from '../../Card/ExploreCard'
import { menus, carddata } from './DataExplore'
export const Explore = () => {
  return (
    <main className='section-explore'>
      <h2 className='title heading-secondary my-5'>Explore Collections</h2>
      <ul className='wrapper'>
        {menus.map((item) => {
          return <li className='wrapper-item'>{item}</li>
        })}
      </ul>

      <div className='container-card'>
        {carddata.map((data) => {
          return (
            <ExploreCard
              title={data.title}
              desc={data.desc}
              imgsrc={data.imgsrc}
              uname={data.uname}
            />
          )
        })}
      </div>
    </main>
  )
}
