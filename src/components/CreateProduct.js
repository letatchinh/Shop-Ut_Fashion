import { Button, ButtonGroup, FormControl, FormControlLabel, FormHelperText, FormLabel, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchAddProductRequest } from '../redux/shopping/Shopping-actions';
import * as TYPES from '../redux/shopping/Shopping-types';
import { useForm } from 'react-hook-form';

export default function CreateProduct() {
  const { setValue, register, handleSubmit, watch, formState: {errors } } = useForm();
  const onSubmit = data => {
    dispatch(fetchAddProductRequest(data))
    alert("Add Thanh cong")
  };

  const newProduct = useSelector(state => state.shop.newProduct)
  const dispatch = useDispatch()
  const clickAddProduct = (e) => {
    e.preventDefault();
    dispatch(fetchAddProductRequest(newProduct))
    alert("Add Thanh cong")
    console.log(newProduct);
  }
  return (
    <Container sx={{width : "30%"}}>
     <form onSubmit={handleSubmit(onSubmit)}>
     <Stack spacing={2}>
     <Typography textAlign="center" variant="h3" gutterBottom>
        NEW PRODUCT
      </Typography>
      <TextField {...register("name")}  label="Name" variant="outlined" />
      <TextField {...register("price")} label="Price" type="number"/>
      <TextField {...register("image")}  label="Image" variant="outlined" />
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{height : "50px"}} fullWidth>
      <select  style={{height : "100%"}} {...register("isSell",{
        onChange : (e) => {
          if(e.target.value === 'false'){
            setValue('discount',0)
          }
        }
      })}>
        <option value={false}>Not Sell</option>
        <option value={true}>Sell</option>
      </select>
      </FormControl>
    </Box>
      <OutlinedInput
          sx={{display : (watch("isSell")==='true') ? "inline-flex" : "none"}}
          id="outlined-adornment-weight"
           type='number'
          defaultValue={0}
           {...register("discount",{min : 0 , max : 100})}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">discount</FormHelperText>

      <Button type='submit' variant='contained'>Post</Button>
     </Stack>
    </form>
    </Container>
  )
}
