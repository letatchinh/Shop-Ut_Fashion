import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { fetchAddToCartRequest } from '../redux/login/Actions';
import Rating from '@mui/material/Rating';
import './StyleComponent/Product.css'
export default function Product(props) {
  const {name , image , price , isSell , item ,rating , listRating} = props
  const dispatch = useDispatch()
  return (
    <Card  sx={{display : "flex" , flexDirection : "column" , alignItems : "center" ,position : "relative" , cursor:"pointer",height : '90%' }}>
    <CardMedia sx={{position : "absolute" , width : "30%" , left : "-5px" , top : "-8px" , display : (isSell === 'true') ? "block" : "none"}} component="img" alt='sale' image='https://tochat.be/click-to-chat/wp-content/uploads/2020/09/sale-logo-download.png'/>
      <CardMedia sx={{height: '50%'}}
        component="img"
        alt="green iguana"
        image={image}
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <h3 style={{textDecoration : (isSell === 'true') ? "line-through" : "none" , color : (isSell === 'false') ?  "orange" : "#C4C4C4" , fontSize : (isSell === 'false') ? '24px' : '12px'} }>
          {price} Đ
        </h3>
        <h3 style={{opacity : (isSell === 'true') ? "1" : "0" ,  color : (isSell) ?  "orange" : "#C4C4C4"}}>
        {price * 9 / 10} Đ
        </h3>
      </CardContent>
      <Rating name="read-only" value={parseInt(rating)} readOnly />
 <Typography  gutterBottom variant="h6" component="span">
          ({listRating.length}) ReView
        </Typography>
      <CardActions>
        <Button onClick={() => dispatch(fetchAddToCartRequest(item))} size="small"><AddShoppingCartIcon/></Button>
      </CardActions>
    </Card>
  );
}

