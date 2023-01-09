import { Link } from 'react-router-dom';
import logo from '../../img/chunky-logo-header.png';
import CartWidget from '../CartWidget/CartWidget';
import MenuItems from '../MenuItems/MenuItems';

const NavBar = ()=>{
    const menuItems = [
        {
            "label": "inicio",
            "path": "/",
            "submenu": []
        },
        {
            "label": "catalogo",
            "path": "",
            "submenu": [
                {
                    "label": "todos los productos",
                    "path": "/shop",
                    "submenu": []
                },
                {
                    "label": "puzzles de madera",
                    "path": "/shop/madera",
                    "submenu": []
                },
                {
                    "label": "puzzles de cartón",
                    "path": "/shop/carton",
                    "submenu": []
                }
            ]
        }
    ]
    
    return(
        <header>
            <div className="navbar-container">
                <nav className="navbar">
                    <img className="navbar-logo" src={logo} alt="chunky puzzles logo"></img>
                    <ul className="menu-bar">
                        {
                            menuItems.map((item, index) => {
                                return <MenuItems items={item} key={index} />
                            })
                        }
                    </ul>
                    <Link to='/cart' className='cart-container'><CartWidget /></Link>
                </nav>
            </div>
        </header>
    )
};

export default NavBar;