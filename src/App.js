import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import CartContainer from './containers/CartContainer/CartContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  let props = {
    saludo:"bienvenidos",
    empresa:"chunky puzzles"
  };
  
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer props={props}/>} />
        <Route path='/detail' element={<ItemListContainer />} />
        <Route path='/cart' element={<CartContainer />}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;