import React from 'react';
import RightSide from './../components/rightSide/RightSide';
import TopNav from './../components/layout/TopNav';
import MiddlleNav from '../components/layout/MiddlleNav/MiddlleNav';
import { Outlet } from 'react-router-dom';
import '../components/leftSide/LeftSide.scss';

export default function HomePage() {

  return (
    <>
      <div className='container-fluid'>
        <div className='row m-0 justify-content-center'>
          <div className='col-12 p-0'>
            <TopNav />
            <div className='row m-0 p-0'>
              <RightSide />
              <div className='col-xl-9'>
                <MiddlleNav />

                <section className='leftSide'>
                  <div className='row mb-3'>
                    <div className='col-12'>
                      <div className='mainContent'>

                        <Outlet />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
