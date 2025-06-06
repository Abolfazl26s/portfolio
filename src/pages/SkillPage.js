import React from 'react'
import SkillItems from '../components/skills/SkillItems'

export default function SkillPage() {
  return (
    <div className="content">
            <div className='col-12 mb-3'>
            <h1 className="mainTitle ">مهارت های من</h1>
            </div>
            <SkillItems />
          </div>
  )
}
