import React from 'react'
import { TopCollection } from '../Card/Collection-Card'
import {data} from "./TopCollectionData"
const TopCollections = () => {
  return (
    <div className='container text-center'>
      <h3 className='heading-tertiary mt-5'>
        Top collections over last 7 days expand_more
      </h3>
      <div className='d-flex flex-wrap justify-content-center'>
        {data.map((item,index)=>{
          return(
            <TopCollection
            no={index+1}
            imgsrc={item.imgsrc}
            title={item.title}
            marketvalue={item.marketvalue}
            value={item.value}
            />
          )
        })}
        
       
      </div>
    </div>
  )
}

export default TopCollections
