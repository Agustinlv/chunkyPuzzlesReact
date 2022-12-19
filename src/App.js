import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import Login from './containers/LoginContainer/LoginContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
  let props = {
    saludo:"bienvenidos",
    empresa:"chunky puzzles"
  };
  
  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path='/' element={<HomeContainer props={props}/>} />
          <Route path='/shop' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartContainer />}/>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;