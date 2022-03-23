import React from 'react'

export default function Avatar(props) {
  return (
    <img className='avtar' src={props.user.avtarUrl} alt={props.user.name} />
  )
}