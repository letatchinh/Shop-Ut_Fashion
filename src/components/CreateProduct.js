import { Button, ButtonGroup, TextField } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchAddProductRequest } from '../redux/shopping/Shopping-actions';
import * as TYPES from '../redux/shopping/Shopping-types'
export default function CreateProduct() {
  const newProduct = useSelector(state => state.shop.newProduct)
  const dispatch = useDispatch()
  const clickAddProduct = (e) => {
    e.preventDefault();
    dispatch(fetchAddProductRequest(newProduct))
    alert("Add Thanh cong")
  }
  return (
    <Container sx={{width : "30%"}}>
      <form onSubmit={clickAddProduct }>
        <Stack alignItems={"center"} spacing={2}>
        <Typography variant="h3" gutterBottom>
        NEW PRODUCT
      </Typography>
          <TextField value={newProduct.name} onChange={e => dispatch(addProduct(TYPES.CHANGE_NAME,e.target.value))} fullWidth id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={newProduct.price} onChange={e => dispatch(addProduct(TYPES.CHANGE_PRICE,e.target.value))} fullWidth id="outlined-basic" label="Price" variant="outlined" type={"number"} />
          <TextField value={newProduct.image} onChange={e => dispatch(addProduct(TYPES.CHANGE_IMAGE,e.target.value))} fullWidth id="outlined-basic" label="Image" variant="outlined" />
          <ButtonGroup >
          <Button type='submit' variant="contained">Add</Button>
          <Button type='reset' variant="outlined" color="error">Reset</Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Container>
  )
}
