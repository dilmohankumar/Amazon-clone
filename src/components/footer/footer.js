import React from 'react'
import FooterTop from '../footer/footertop'
import FooterMiddle from './footermiddle'
import FooterBottom from './footerbottom'

const footer = () => {
  return (
    <div className='font-titleFont'>
      <FooterTop/>
      <FooterMiddle/>
      <FooterBottom/>
    </div>
  )
}

export default footer