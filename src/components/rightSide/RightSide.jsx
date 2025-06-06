import React from 'react'

import SocialMedia from '../layout/SocialMedia';
import './RightSide.scss'
import Information from './Information';
import BtnCVDownload from './../layout/BtnCVDownload';

export default function RightSide() {
  return (
      <div className="col-xl-3 mb-3">
        <section className="rightSide">
        <div className="avatar">
          <img src="https://abolfazl26s.github.io/project_data/images/abolfazl.jpg" alt="Abolfazl Saeidabadi" className="avatar__image" />
        </div>

        <div className="avatar_info">
          <h1 className="fullName">ابوالفضل سعیدآبادی</h1>
          <p className="mb-3 small">توسعه دهنده وب / طراح رابط کاربری</p>
        </div>


        <SocialMedia/>

        <Information/>

        <BtnCVDownload/>

      </section>
      </div>
  );
}
