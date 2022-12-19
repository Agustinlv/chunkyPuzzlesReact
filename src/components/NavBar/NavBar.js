import { Link } from 'react-router-dom';
import logo from '../../img/chunky-logo-header.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=>{

    return(
        <header>
            <div className="navbarContainer">
                <nav className="navbar">
                    <img className="chunkyLogo" src={logo} alt="chunky puzzles logo"></img>
                    <ul className="menuList">
                        <Link to='/'><button className='menuButton'>inicio</button></Link>
                        <Link to='/shop'><button className='menuButton'>comprar</button></Link>
                        <Link to='/login'><button className='menuButton'>login</button></Link>
                    </ul>
                    <Link to='/cart'><CartWidget /></Link>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;