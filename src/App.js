import './App.css';
import NavBar from './componentes/NavBar/NavBar.js';
import ItemListContainer from './componentes/HomeContainer/ItemListContainer';
import FooterContainer from './componentes/FooterContainer/FooterContainer';

function App() {
  let saludo = "bienvenidos a chunky puzzles";
  let mensaje = "chunky puzzles®"
  return (
  <div>
    <header>
      <NavBar />
    </header>
    <body>
      <ItemListContainer saludo = {saludo}/>
    </body>
    <footer>
      <FooterContainer mensaje = {mensaje}/>
    </footer>
  </div>
  );
};

export default App;