import { Avatar, Button, IconButton, List, ListItem, ListItemText } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCartRequest, fetchCartRequest } from '../redux/Cart/Actions';
import {v4} from 'uuid'
export default function Cart() {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.cart.listCart)
    useEffect(() => {
        dispatch(fetchCartRequest())
    },[dispatch])
    const handleDeleteCart = (item) => {
        dispatch(DeleteCartRequest(item))
        
    }
   
  return (
    <List  sx={{   bgcolor: 'background.paper',position : 'absolute' ,zIndex :1, width : "400px" ,background : "aliceblue", top : "100%" , right : "100%" , borderRadius : "20px" , padding : "10px 50px"}}>
   {carts.length === 0 && <span>Empty</span>}
      {carts.map((value) => (
        <ListItem
          key={v4()}
          disableGutters
          secondaryAction={
            <IconButton onClick={() =>handleDeleteCart(value.id)} aria-label="comment">
              <DeleteIcon/>
            </IconButton>
          }
        >
        <Avatar alt="Remy Sharp" src={value.image} />
          <ListItemText sx={{textAlign : "center"}} primary={value.name} />
          <Button variant="outlined">-</Button>
          <span style={{margin : "0 10px"}}>{value.quanlity}</span>
          <Button variant="outlined">+</Button>
          <span style={{margin : "0 10px"}}>{value.price}</span>
        </ListItem>
        
      ))}

    </List>
  )
}
