import React from 'react'
import { Link } from 'react-router-dom';

export default function SocialMedia() {
  return (
    <div className="socialMedia">
      <Link  to='#!'>
        <span style={{"--icon-color":"#0072B1"}} className="socialBtn">
          <i className="fab fa-linkedin "></i>
        </span>
      </Link>
      <Link to='#!'>
        <span style={{"--icon-color":"#1C9CEA"}} className="socialBtn">
          <i className="fab fa-twitter"></i>
        </span>
      </Link>
      <Link disabled to='#!'>
        <span style={{"--icon-color":"#1773EA"}} className="socialBtn">
          <i className="fab fa-facebook"></i>
        </span>
      </Link>
      <Link to='https://github.com/Abolfazl26s'>
        <span style={{"--icon-color":"#030303"}} className="socialBtn">
          <i className="fab fa-github"></i>
        </span>
      </Link>
    </div>
  );
}
