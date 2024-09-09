import React from 'react'
import './Section1.css'

const Section1 = () => {
  return (
    <div className='section1'>
        <div className='section1-container'>
            <div className='section1-container-left'>
              <div className='section1-container-left-top'>
                <div className='section1-container-left-top-heading'>
                  <h3>Bold Minimalist</h3>
                </div>
                <div className='section1-container-left-top-desc'>
                  <h4>Clean lines and statement pieces that speak volumes</h4>
                </div>
              </div>
              <div className='section1-container-left-bottom'>
                <button id="btn-section1">For Men</button>
              </div>
            </div>
            <div className='section1-container-center'>
                <div className='section1-container-center-top'>
                  <div className='section1-container-center-top-heading'>
                    <h3>Effortless Elegance</h3>
                  </div>
                  <div className='section1-container-center-top-desc'>
                    <h4>Timeless silhouettes with a modern twist for any occasion</h4>
                  </div>
                </div>
                <div className='section1-container-center-bottom'>
                  <button id="btn-section1">For Women</button>
                </div>
            </div>
            <div className='section1-container-right'>
                <div className='section1-container-right-top'>
                  <div className='section1-container-right-top-heading'>
                    <h3>Statement Sparkle</h3>
                  </div>
                  <div className='section1-container-right-top-desc'>
                    <h4>Bold jewelry that adds a touch of glamour to any outfit</h4>
                  </div>
                </div>
                <div className='section1-container-right-bottom'>
                  <button id="btn-section1">Accessories</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1