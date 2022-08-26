import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addCart, addCartRequest } from '../redux/Cart/Actions';
export default function Product(props) {
  const {name , image , price , isSell , item} = props
  const dispatch = useDispatch()
  const handleAddCart = () => {
    dispatch(addCartRequest(item))
  }
  return (
    <Card sx={{display : "flex" , flexDirection : "column" , alignItems : "center" ,position : "relative"}}>
    <CardMedia sx={{position : "absolute" , width : "30%" , left : "-5px" , top : "-8px" , display : (isSell) ? "block" : "none"}} component="img" alt='sale' image='https://tochat.be/click-to-chat/wp-content/uploads/2020/09/sale-logo-download.png'/>
      <CardMedia
        component="img"
        alt="green iguana"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <h3 style={{textDecoration : (isSell) ? "line-through" : "none"}}>
          {price} Đ
        </h3>
        <h3 style={{opacity : (isSell) ? "1" : "0"}}>
        {price * 9 / 10} Đ
        </h3>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddCart} size="small"><AddShoppingCartIcon/></Button>
      </CardActions>
    </Card>
  );
}

