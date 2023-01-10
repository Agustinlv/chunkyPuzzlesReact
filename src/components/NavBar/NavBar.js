import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/chunky-logo-header.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=>{
    const [ dropdownState, setDropdownState] = useState(false);

    return(
        <header>
            <div className="navbar-container">
                <nav className="navbar">
                    <img className="navbar-logo" src={logo} alt="chunky puzzles logo"></img>
                    <ul className="menu-bar">
                        <Link to="/"><button className="menu-button" onClick={()=>setDropdownState(false)}>inicio</button></Link>
                        <button className="menu-button" onClick={()=>setDropdownState(prev => !prev)}>catalogo</button>
                        <ul className={`dropdown${dropdownState ? " show":""}`} onClick={()=>setDropdownState(prev => !prev)}>
                            <Link to="/shop"><button className="menu-button">todos los productos</button></Link>
                            <Link to="/shop/madera"><button className="menu-button">puzzles de madera</button></Link>
                            <Link to="/shop/carton"><button className="menu-button">puzzles de carton</button></Link>
                        </ul>
                    </ul>
                    <Link to='/cart' className='cart-container' onClick={()=>setDropdownState(false)}><CartWidget /></Link>
                </nav>
            </div>
        </header>
    )
};

export default NavBar;