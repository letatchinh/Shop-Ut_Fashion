import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthProductRequest } from '../redux/shopping/Shopping-actions'
import Product from './Product'
import {v4} from 'uuid'
export default function ListProducts() {
    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.shop.listProduct)
    useEffect(() => {
        dispatch(fecthProductRequest())
    },[dispatch])
  return (
   <Container >
       <Grid container spacing={3} >
           {
            listProduct.map(e => <Grid key={v4()}  xs={3} item><Product item={e} image={e.image} name={e.name} price={e.price} isSell={e.isSell} id={e.id}/></Grid>)
           }
           
       </Grid>
   </Container>
  )
}
