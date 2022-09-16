import { Grid, Pagination } from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { URL_BASE } from "../constant/UrlConstant";
import Product from "./Product";

export default function ListProducts() {
  const limit = 4;
  const [start, setStart] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [listShow, setListShow] = useState([]);
  const fetch = useCallback(async () => {
    const res = await axios.get(`${URL_BASE}listProduct`);
    setListShow(res.data.slice(start, start + limit));
    setCount(Math.ceil(res.data.length / limit));
  }, [page]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  const handleChange = (event, value) => {
    setPage(value);
    const newStart = (value - 1) * limit;
    setStart(newStart);
  };
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {listShow &&
            listShow.map((e) => (
             <Grid key={v4()}  xs={3} item>
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
            ))}
        </Grid>
        <Stack alignItems='center' spacing={2}>
          <Pagination   count={count} page={page} onChange={handleChange} />
        </Stack>
      </Container>
    </>
  );
}
