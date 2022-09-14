import logo from './logo.svg';
import './App.css';
import Header from './layout/Header/Index'
import { Route, Routes } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import CreateProduct from './components/CreateProduct';
import Login from './components/Login';
import Search from './components/Search';
import Register from './components/Register';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthProductRequest } from './redux/shopping/Shopping-actions';
function App() {
  const dispatch = useDispatch();
  const fetch = useCallback(async() => {
    await dispatch(fecthProductRequest())
  },[dispatch])
  useEffect(() => {
    fetch()
  },[fetch]);
 
  return (
   <>
     <Header />
     <Routes>
       <Route path='/' element={<ListProducts />}/>
       <Route path='/search' element={<Search />}/>
       <Route path='/new' element={<CreateProduct />}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/register' element={<Register />}/>
     </Routes>
   </>
  );
}

export default App;
