import { Grid, Pagination, Skeleton } from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { URL_BASE } from "../constant/UrlConstant";
import { fecthProductRequest } from "../redux/shopping/Shopping-actions";
import Product from "./Product";

export default function ListProducts() {
  const limit = 4;
  const [start, setStart] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [listShow, setListShow] = useState([]);
  const [list,setList] = useState([]);
  const [loading,setLoading] = useState(false)
const fetch = useCallback(async() => {
    const res = await axios.get(`${URL_BASE}listProduct`);
    setList(res.data)
    setLoading(true)
  },[loading])
useEffect(() => {
  fetch()
},[fetch]);
  const fetch2 = useCallback(() => {
    setListShow(list.slice(start, start + limit));
    setCount(Math.ceil(list.length / limit));
  }, [page,loading]);
  useEffect(() => {
    fetch2();
  }, [fetch2]);
  const handleChange = (event, value) => {
    setPage(value);
    const newStart = (value - 1) * limit;
    setStart(newStart);
  };
  return (
    <>
      <Container>
        <Grid  container spacing={3}>
          {!loading ? Array.from(new Array(limit)).map(e => <Grid key={v4()} item xs={3}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Grid>) :(listShow &&
            listShow.map((e) => (
             <Grid className="abc" key={v4()}  xs={3} item>
             <Link  to={`/products/${e.id}`}>
                <Product
                  item={e}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  isSell={e.isSell}
                  id={e.id}
                  rating={e.rating}
                  listRating={e.listRating}
                />
             </Link>
              </Grid>
            )))}
        </Grid>
        <Stack alignItems='center' spacing={2}>
          <Pagination   count={count} page={page} onChange={handleChange} />
        </Stack>
      </Container>
    </>
  );
}
