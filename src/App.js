import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import CartContainer from './containers/CartContainer/CartContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer/LoginContainer';

function App() {
  let saludo = "bienvenidos a chunky puzzles";
  let mensaje = "chunky puzzles®"
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer saludo = {saludo}/>} />
        <Route path='/detail' element={<ItemListContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/cart' element={<CartContainer />}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
        <FooterContainer mensaje = {mensaje}/>
    </BrowserRouter>
  );
};

export default App;