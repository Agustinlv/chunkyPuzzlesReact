import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({items, dropdown}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(()=>{
        setDropdownOpen(dropdown);
    },[dropdown]);

    return(
        <ul className={`dropdown ${dropdownOpen ? "show":""}`}>
            {
                items.map((item, index) => 
                <li className="menu-items" key={index}>
                    <Link to={item.path}><button className="menu-button" aria-expanded={dropdownOpen ? "true" : "false"} onClick={() => setDropdownOpen(prev => !prev)}>{item.label}</button></Link>
                </li>
                )
            }
        </ul>
    );
};

export default Dropdown;