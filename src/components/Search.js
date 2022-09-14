import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import productApi from '../apis/productApi'
import { Container } from '@mui/system'
import PaginatedItems from './PaginatedItems'
export default function Search({data}) {
  const [listSearch,setListSearch] = useState([])
  const setInputSearch = useSelector(state => state.shop.setSearchKeyword)
  const fetchSearch = useCallback(async() => {
    const res = await productApi.searchItem(setInputSearch)
    setListSearch(res.data)
  },[setInputSearch])
  useEffect(() => {
    fetchSearch()
  },[fetchSearch])
  return (
    <Container >
       {/* <Grid container spacing={3} >
           {
            listSearch.map(e => <Grid key={v4()}  xs={3} item><Product item={e} image={e.image} name={e.name} price={e.price} isSell={e.isSell} id={e.id}/></Grid>)
           }
           
       </Grid> */}
       <PaginatedItems itemsPerPage={4} listProduct={listSearch}/>
   </Container>
  )
}
