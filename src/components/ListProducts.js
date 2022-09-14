import { Container } from '@mui/system'
import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fecthProductRequest } from '../redux/shopping/Shopping-actions'
import PaginatedItems from './PaginatedItems'

export default function ListProducts() {
  const dispatch = useDispatch();
  const fetch = useCallback(async() => {
    await dispatch(fecthProductRequest())
  },[])
  useEffect(() => {
    fetch()
  },[]);
const listProduct = useSelector(state => state.shop.listProduct)
  return (
   <Container >
       <PaginatedItems itemsPerPage={4} listProduct={listProduct}/>
   </Container>
  )
}
