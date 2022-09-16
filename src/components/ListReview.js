import React from 'react'
import { v4 } from 'uuid';
import Review from './Review'

export default function ListReview({data}) {
  return (
     <>
      {
         data && data.map(e => <Review key={v4()} comment={e.comment} rating={e.rating} time={e.time} username={e.username}/>)
        }
     </>
  )
}
