import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './SideBarremoved.css';
import { IconContext } from 'react-icons';

function SideBarMob({sideBarData}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const sideBarItems = () => {      
      return sideBarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })
  }

  return (
    <div className='side-bar-md d-block d-md-none'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='slide-bar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  style={{color:'#006bbd'}} onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex:'11'}}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sideBarItems()}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default SideBarMob;