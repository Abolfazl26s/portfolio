import React from 'react';
import PortfolioCards from '../components/portfolio/PortfolioCards';

export default function PortfolioPage() {
  return (
    <div className='content'>
      <div className='mb-3'>
        <h1 className='mainTitle '>نمونه کارها</h1>
      </div>

      <PortfolioCards />
    </div>
  );
}
