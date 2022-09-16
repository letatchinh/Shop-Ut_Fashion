import { Button, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { fetchAddToCartRequest } from "../redux/login/Actions";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import ListReview from "./ListReview";
import {  fetchAddRatingProductRequest } from "../redux/shopping/Shopping-actions";
export default function DetailProduct(props) {
  const { name, image, price, isSell, item, rating,id,listRating } = props;
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const sum = listRating.reduce((sum,arr)=> sum+arr.rating,value)
    const newRating = (sum/(listRating.length+1)).toFixed()
    dispatch(fetchAddRatingProductRequest({...item,listRating : [...item.listRating,{...data,rating : value}],rating : newRating},id))
  } 
  return (
    <Container>
      <Stack justifyContent="space-between" direction="row" spacing={5}>
        <img style={{ width: "50%" }} src={image} alt="name" />
        <Stack width="50%" spacing={2}>
          <Typography variant="h5" fontWeight="600">
            {name}
          </Typography>
          <Stack
            width="50%"
            sx={{ padding: "20px", border: "2px solid #f3f3f3" ,borderRadius : '10px'}}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ borderBottom: "2px solid #f3f3f3", padding: "10px" }}
            >
              <Typography variant="h6">Price</Typography>
              <Typography variant="h6" fontWeight="600">
                {price} $
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ borderBottom: "2px solid #f3f3f3", padding: "10px" }}
            >
              <Typography variant="h6">Review</Typography>
              <Rating name="read-only" value={rating} readOnly />
            </Stack>
            <Button
              onClick={() => dispatch(fetchAddToCartRequest(item))}
              variant="outlined"
              endIcon={<ShoppingCartIcon />}
            >
              ADD
            </Button>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
         <Stack spacing={2}>
         <Typography variant="h6">WRITE A CUSTOMER REVIEW</Typography>
          <Typography variant="h5">Rating</Typography>
          <Rating 
       name="half-rating"
       precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
          <Typography variant="h5">Comment</Typography>
          <TextField {...register("comment")}
            id="outlined-basic"
            label="Write Commet Here ..."
            variant="outlined"
          />
          <Button disabled={value === null}  type="submit" sx={{width : '40%',marginLeft:'auto!important'}} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
         </Stack>
          </form>
        </Stack>
      </Stack>
      <Stack sx={{marginTop : '50px'}}>
      <Typography variant="h5">Review</Typography>
          <ListReview data={item.listRating}/>
      </Stack>
    </Container>
  );
}
