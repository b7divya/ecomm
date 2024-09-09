import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-container-top'>
                <div className='footer-container-top-left'>
                    <h3>HELP</h3>
                    <div className='footer-container-top-left-help'>
                        <h5>+91-000000</h5> <br/>
                        <h5>+91-000000</h5> <br/>
                        <h5>abc@xyz.com</h5> <br/>
                        <h5>Return/Exchange</h5> <br/>
                        <h5>Contact Us</h5> <br/>
                        <h5>Afterpay</h5>
                    </div>
                </div>
                <div className='footer-container-top-center'>
                    <h3>SHOP</h3>
                    <div className='footer-container-top-center-shop'>
                        <h5>Men's Shoes</h5> <br/>
                        <h5>Women's Shoes</h5> <br/>
                        <h5>Men's Apparel</h5> <br/>
                        <h5>Women's Apparel</h5> <br/>
                        <h5>Socks</h5> <br/>
                        <h5>Giftcard</h5>
                        <h5>Refer A Friend</h5>
                    </div>
                </div>
                <div className='footer-container-top-right'>
                    <h3>COMPANY</h3>
                    <div className='footer-container-top-right-company'>
                        <h5>Our Stores</h5> <br/>
                        <h5>Our Story</h5> <br/>
                        <h5>Our Material</h5> <br/>
                        <h5>Sustainability</h5> <br/>
                        <h5>Investors</h5> <br/>
                        <h5>Shoe Care</h5>
                        <h5>Affiliate</h5>
                        <h5>Bulk Orders</h5>
                        <h5>Careers</h5>
                    </div>
                </div>
            </div>
            {/* <div className='footer-container-center'>
                <div className='footer-container-center-left'>

                </div>
                <div className='footer-container-center-center'>
                    
                </div>
                <div className='footer-container-center-right'>
                    
                </div>
            </div> */}
            <div className='footer-container-bottom'>
                <div className='footer-container-bottom-top'>
                    <h4>© 2024 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</h4>
                </div>
                <div className='footer-container-bottom-bottom'>
                    <h4>Do Not Sell My Personal Information</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer