import { Grid, Pagination } from '@mui/material'
import { Container, Stack } from '@mui/system'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { v4 } from 'uuid'
import { URL_BASE } from '../constant/UrlConstant'
import { fecthProductRequest } from '../redux/shopping/Shopping-actions'
import PaginatedItems from './PaginatedItems'
import Product from './Product'

export default function ListProducts() {
  // const dispatch = useDispatch();
  // const fetch = useCallback(async() => {
  //   await dispatch(fecthProductRequest())
  // },[dispatch])
  // useEffect(() => {
  //   fetch()
  // },[fetch]);
  const limit = 4;
  const [start,setStart] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [listShow,setListShow] = useState([])
  const fetch = useCallback(async() => {
    const res = await axios.get(`${URL_BASE}listProduct`)
    setListShow(res.data.slice(start,start+limit))
    setCount(Math.ceil(res.data.length / limit));
  console.log(listShow);
  },[page])
  useEffect(()=>{
    fetch()
  },[fetch])
  const handleChange = (event, value) => {
    setPage(value)
    setStart(value)
    console.log(start);
  };
  return (
   <>
   <Grid container spacing={3} >
           {listShow &&
            listShow.map(e => <Grid key={v4()}  xs={3} item><Product item={e} image={e.image} name={e.name} price={e.price} isSell={e.isSell} id={e.id}/></Grid>)
           }
       </Grid>
   <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
   </>
  )
}
