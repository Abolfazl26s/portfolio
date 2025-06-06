import React from 'react'
import TopNav from '../layout/TopNav';
import MainContent from '../layout/MainContent';
export default function MainLayOut() {
  return (
    <div className="container-fluid">
          <TopNav />

          <MainContent />
        </div>
  )
}
