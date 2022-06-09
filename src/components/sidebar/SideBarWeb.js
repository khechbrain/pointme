import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const SideBarWeb = ({sideBarData}) => {
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
    <div className='side-bar-menu p-0 m-0 d-none d-md-block '>
      <div className='col-12'>
        {sideBarItems()}
      </div>  
    </div>
  );
};

export default SideBarWeb;