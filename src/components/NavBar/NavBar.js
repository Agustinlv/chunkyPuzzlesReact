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
                        <Link to='/detail'><button className='menuButton'>comprar</button></Link>
                    </ul>
                    <Link to='/cart'><CartWidget itemCount = "0"/></Link>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;