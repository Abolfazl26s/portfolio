import React, { useState } from 'react'
import './TopNav.scss'

const TopNav = () => {
  const [theme, setTheme]= useState(true);


  if(theme){
    document.querySelector('body').setAttribute('data-theme','light');
  }else{
    document.querySelector('body').setAttribute('data-theme','dark');
  }

  const changeTheme = ()=>{
    setTheme((prevState) => !prevState)
    if(theme){
      document.querySelector('body').setAttribute('data-theme','light');
    }else{
      document.querySelector('body').setAttribute('data-theme','dark');
    }
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="topNav">
          <div className="topNav__logo">
            <img src="#" alt="" className="mainLogo" />
            <h2 className='topNav__title'>Abolfazl</h2>
          </div>
          <div className="topNav__actionBtn">
            <button onClick={changeTheme} className="btn btnDrakMode topNavBtn">
              {theme ? <i className="fas fa-moon" /> : <i className='fas fa-sun'></i>}              
            </button>
            <button disabled className="btn topNavBtn">
              <i className="fas fa-language" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav