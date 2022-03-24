import React from 'react'
import tranding from "./ResourcesData"
import MakeCarousel from '../Carousel'
import Card from '../Card/Card'
export const Resources = () => {
  return (
    <MakeCarousel
    heading={" Resources for getting started"}
    items={tranding.map((item) => (
        <Card
            key={item.id}
            profileURL={item.profileURL}
            userName={item.userName}
            avtarUrl={item.avtarUrl}
            description={item.description}
        ></Card>
    ))}
   />
  )
}
