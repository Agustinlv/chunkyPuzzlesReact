import { useState } from "react";
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

const MenuItems = ({items}) => {
    const [dropdown, setDropdown] = useState(false);
 
    return (
        <li className="menu-items">
            {
                items.submenu.length > 0 ?
                (
                    <>
                        <button className="menu-button" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>{items.label}</button>
                        <Dropdown items={items.submenu} dropdown={dropdown} />
                    </>
                )
                :
                    <Link to={items.path}><button className="menu-button">{items.label}</button></Link>
            }
        </li>
    )
};

export default MenuItems;