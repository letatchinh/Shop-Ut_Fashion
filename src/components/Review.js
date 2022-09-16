import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Rating from '@mui/material/Rating';

export default function Review(props) {
    const {comment,rating,time,username} = props
  return (
    <Stack sx={{border : '2px solid #f3f3f3', padding : '10px' , borderRadius : '10px' , width : '50%' , margin : '10px 0'}}>
    <Typography variant="h6">{username}</Typography>
    <Rating name="read-only" value={rating} readOnly size='small'/>
    <Typography variant="h6">{time}</Typography>
     <Typography sx={{padding : '10px' ,background : 'skyblue', borderRadius : '10px' }} variant="h5">{comment}</Typography>
    </Stack>
  )
}
