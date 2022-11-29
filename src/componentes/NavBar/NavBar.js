import logo from '../../img/chunky-logo-header.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=>{
    
    const alertClickInicio = ()=>{alert(`Hiciste click en INICIO`);}
    const alertClickComprar = ()=>{alert(`Hiciste click en COMPRAR`);}
    const alertClickLogin = ()=>{alert(`Hiciste click en LOGIN`);}
    
    return(
        <div className="navbarContainer">
            <nav className="navbar">
                <img className="chunkyLogo" src={logo} alt="chunky puzzles logo"></img>
                <ul className="menuList">
                    <button onClick={alertClickInicio}>inicio</button>
                    <button onClick={alertClickComprar}>comprar</button>
                    <button onClick={alertClickLogin}>login</button>
                </ul>
                <CartWidget itemCount = "0"/>
            </nav>
        </div>
    );
};

export default NavBar;