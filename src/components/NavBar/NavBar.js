import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import logo from '../../img/chunky-logo-header.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=>{
    const [menuStatus, setMenuStatus] = useState(false);

    return(
        <header>
            <div className="navbarContainer">
                <nav className="navbar">
                    <img className="chunkyLogo" src={logo} alt="chunky puzzles logo"></img>
                    <div className="menuList">
                        <Link to='/'><button className='menuButton'>inicio</button></Link>
                        <Link to='/shop'><button className='menuButton'>todos</button></Link>
                        <Link to='/shop/wooden'><button className='menuButton'>madera</button></Link>
                        <Link to='/shop/cardboard'><button className='menuButton'>carton</button></Link>
                        <Link to='/login'><button className='menuButton'>login</button></Link>
                    </div>
                    <Link to='/cart'><CartWidget /></Link>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;