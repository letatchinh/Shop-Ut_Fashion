import logo from './logo.svg';
import './App.css';
import Header from './layout/Header/Index'
import { Route, Routes } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import CreateProduct from './components/CreateProduct';
import Login from './components/Login';
import Search from './components/Search';
import Register from './components/Register';
function App() {
  return (
   <>
     <Header />
     <Routes>
       <Route path='/product' element={<ListProducts />}/>
       <Route path='/search' element={<Search />}/>
       <Route path='/product/new' element={<CreateProduct />}/>
       <Route path='/product/login' element={<Login />}/>
       <Route path='/product/register' element={<Register />}/>
     </Routes>
   </>
  );
}

export default App;
