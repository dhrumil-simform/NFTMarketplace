import React from 'react'
import MakeCarousel from '../Carousel'
import Card1 from '../Card/Card1';
import carousel from "./NotableDropsData"


function NotableDrops() {
  return (
    <MakeCarousel
                heading={"Notable Drops"}
                items={carousel.map((item) => (
                    <Card1 key={item.id} title={item.title}></Card1>
                ))}
            />
  )
}

export default NotableDrops