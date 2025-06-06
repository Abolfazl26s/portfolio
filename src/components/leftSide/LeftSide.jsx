import React from 'react';
import './LeftSide.scss';

import MiddlleNav from '../layout/MiddlleNav/MiddlleNav';
import { Outlet } from 'react-router-dom';

export default function LeftSide() {
  return (
    <div className="col-xl-9 mb-3">
      <section className='leftSide'>
        <div className='row'>
          <div className='col-12'>
            <MiddlleNav />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12'>
            <div className='mainContent'>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}
