import './App.css';
import Header from './layout/Header/Index'
import { Route, Routes } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import CreateProduct from './components/CreateProduct';
import Login from './components/Login';
import Search from './components/Search';
import Register from './components/Register';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthProductRequest } from './redux/shopping/Shopping-actions';
import { v4 } from 'uuid';
import DetailProduct from './components/DetailProduct';
import ProfileUser from './components/ProfileUser';
import InfoUser from './components/InfoUser';
import ListPaymentUser from './components/ListPaymentUser';
function App() {
  const dispatch = useDispatch();
  const fetch = useCallback(async() => {
    await dispatch(fecthProductRequest())
  },[])
  useEffect(() => {
    fetch()
  },[]);
 const listProduct = useSelector(state => state.shop.listProduct)
  return (
   <>
     <Header />
     <Routes>
       <Route path='/' element={<ListProducts />}/>
       <Route path='/search' element={<Search />}/>
       <Route path='/new' element={<CreateProduct />}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/register' element={<Register />}/>
       {listProduct.map(e => <Route key={v4()} path={`products/${e.id}`} element={<DetailProduct item={e}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  isSell={e.isSell}
                  id={e.id}
                    listRating={e.listRating}
                    rating={e.rating}
                  />}/>)}
      <Route path='profile_Info' element={<ProfileUser children={<InfoUser/>}/>}/>
      <Route path='profile_ListPayment' element={<ProfileUser children={<ListPaymentUser/>}/>}/>
     
     </Routes>
   </>
  );
}

export default App;
