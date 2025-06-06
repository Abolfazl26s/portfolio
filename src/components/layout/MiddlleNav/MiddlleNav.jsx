import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './MiddlleNav.scss';
import axios from 'axios';


export default function MiddlleNav() {
const [menuItems, setMenuItems]= useState([])
const [menuMobileIsActive, setMenuMobileIsActive]=useState(false);

  const getMenuItems = () => {
    axios
      .get('https://abolfazl26s.github.io/project_data/data/db.json')
      .then(function (response) {
        // handle success
        setMenuItems(response.data.menuItems);
      })
    };

    const toggleMenu =()=>{
      setMenuMobileIsActive((prevState)=> !prevState)
    }


    useEffect(()=>{
      getMenuItems();
    },[])

  return (
    <div className="row mb-5">
      <div className="col-12">
        <div className={`navBar ${menuMobileIsActive ? 'activeMobile' : ''}`}>
          <button onClick={toggleMenu} className="btnToggleMenu btn">
            {menuMobileIsActive ? <i className='fas fa-circle-xmark'></i> : <i className='fas fa-bars-staggered'></i>}
          </button>
          {menuItems &&
            menuItems?.map((item) => (
              <NavLink key={item.id} className="btn navBtn" to={item.link}>
                <i className={item.icon} />
                {item.title}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
}
