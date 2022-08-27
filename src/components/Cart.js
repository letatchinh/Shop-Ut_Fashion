import { Avatar, Button, IconButton, List, ListItem, ListItemText } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemCartRequest, DeleteCartRequest, fetchCartRequest, increaseItemCartRequest } from '../redux/Cart/Actions';
import {v4} from 'uuid'
import { fecthUserRequest, fetchLogginSuccessRequest } from '../redux/login/Actions';
export default function Cart() {
    const dispatch = useDispatch()
    const cartUser = useSelector(state => state.user.loginSuccess[0])
    console.log(cartUser);
    useEffect(() => {
      if(localStorage.getItem('user')){
        dispatch(fetchLogginSuccessRequest());
      }
    },[localStorage.getItem('user')])
    const handleDeleteCart = (item) => {
        dispatch(DeleteCartRequest(item))
        
    }
    
   
  return (
    <List  sx={{   bgcolor: 'background.paper',position : 'absolute' ,zIndex :1, width : "400px" ,background : "aliceblue", top : "100%" , right : "100%" , borderRadius : "20px" , padding : "10px 50px"}}>
   {/* {carts.length === 0 && <span>Empty</span>} */}
      {[1,2,3].map((value) => (
        <ListItem
          key={v4()}
          disableGutters
          secondaryAction={
            <IconButton  aria-label="comment">
              <DeleteIcon/>
            </IconButton>
          }
        >
        <Avatar alt="Remy Sharp" src={value.image} />
          <ListItemText sx={{textAlign : "center"}} primary={value.name} />
          <Button  variant="outlined">-</Button>
          <span style={{margin : "0 10px"}}>{value.quanlity}</span>
          <Button  variant="outlined">+</Button>
          <span style={{margin : "0 10px"}}>{value.price}</span>
        </ListItem>
        
      ))}

    </List>
  )
}
