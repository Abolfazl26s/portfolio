import React from 'react'

export default function Information() {
  return (
    <div className="information">
  <div className="information__card">
    <span className="infoIcon"><i className="fas fa-phone-flip" /></span>
    <div className="infoContent">
      <p className="infoTitle">شماره تماس</p>
      <a href='tel:+447776890129' dir='ltr' className="infoText">+44 7776890129</a>
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
      <p className="infoText text-wrap">asaeidabadi243@gmail.com</p>
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
