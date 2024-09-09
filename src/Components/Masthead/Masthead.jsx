import React from 'react'
import './Masthead.css'

const Masthead = () => {
  return (
    <div className='masthead'>
        <div className='masthead-container'>
            <div className='masthead-container-left'>

            </div>
            <div className='masthead-container-right'>
                <div className='masthead-container-right-title'>
                    <h2> Shop 'til You Drop...<br />
                    But Please, Not Your Phone! </h2>
                </div>
                <div className='masthead-container-right-btn'>
                    <button className='masthead-container-right-btn-mast-btn1'>FOR MEN</button>
                    <button className='masthead-container-right-btn-mast-btn2'>FOR WOMEN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Masthead