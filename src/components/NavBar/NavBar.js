import { Link } from 'react-router-dom';
import {useState} from 'react';
import logo from '../../img/chunky-logo-header.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=>{
    const [menuStatus, setMenuStatus] = useState(false);

    const changeMenuStatus = () => {
        setMenuStatus(!menuStatus);
    }

    return(
        <header>
            <div className="navbarContainer">
                <nav className="navbar">
                    <img className="chunkyLogo" src={logo} alt="chunky puzzles logo"></img>
                    <div className="menuList">
                        <Link to='/'><button className='menuButton'>inicio</button></Link>
                        <button className='menuButton' onClick={changeMenuStatus}>comprar</button>
                        {menuStatus ?
                            <div className='dropdown'>
                                <ul className='dropdownMenu'>
                                    <li>
                                        <Link to='/shop'><button className='menuButton' onClick={changeMenuStatus}>todos</button></Link>
                                    </li>
                                    <li>
                                        <Link to='/shop/madera'><button className='menuButton' onClick={changeMenuStatus}>madera</button></Link>
                                    </li>
                                    <li>
                                        <Link to='/shop/carton'><button className='menuButton' onClick={changeMenuStatus}>carton</button></Link>
                                    </li>
                                </ul>
                            </div>
                        :
                            null
                        }
                    </div>
                    <Link to='/cart'><CartWidget /></Link>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;