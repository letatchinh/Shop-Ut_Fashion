import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export default function ItemListPaymentUser() {
  return (
    <Card sx={{ maxWidth: 250 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://product.hstatic.net/1000343028/product/1_117a2b90e07441da9e61d76d4f222895_1024x1024.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          30.000 VND
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ao dep
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
