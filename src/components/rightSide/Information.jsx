import React from 'react'

export default function Information() {
  return (
    <div className="information">
  <div className="information__card">
    <span className="infoIcon"><i className="fas fa-phone-flip" /></span>
    <div className="infoContent">
      <p className="infoTitle">شماره تماس</p>
      <p className="infoText">09904470638</p>
    </div>
  </div>
  <div className="information__card">
    <span  className="infoIcon"><i className="fas fa-location-dot" /></span>
    <div className="infoContent">
      <p className="infoTitle">آدرس</p>
      <p className="infoText">شیراز</p>
    </div>
  </div>
  <div className="information__card">
    <span  className="infoIcon"><i className="fas fa-envelope" /></span>
    <div className="infoContent">
      <p className="infoTitle">پست الکترونیک</p>
      <p className="infoText text-wrap">asae********@gmail.com</p>
    </div>
  </div>
  <div className="information__card">
    <span  className="infoIcon"><i className="fas fa-calendar-days" /></span>
    <div className="infoContent">
      <p className="infoTitle">تولد</p>
      <p className="infoText">08 / 07 / 1373</p>
    </div>
  </div>
</div>

  )
}
