import React from 'react'
import './Section3.css'

const Section3 = () => {
  return (
    <div className='section3'>
        <div className="section3-container">
            <div className='section3-container-heading'>
              <h2>Want First Dibs?</h2>
            </div>
            <div className='section3-container-desc'>
              <h4>Join our email list and be the first to know about new limited edition products, <br /> material innovations, and lots of other fun updates.</h4>
            </div>
            <div className='section3-container-form'>
              <input id='inp' placeholder='Enter Your Email Address'></input>
              <button id='inp-btn'>SIGN UP</button>
            </div>
            <div className='section3-container-policy'>
              <p>Note: You can opt-out at any time. See our Privacy Policy and Terms.</p>
            </div>
        </div>
    </div>
  )
}

export default Section3