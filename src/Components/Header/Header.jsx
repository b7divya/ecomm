import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-container-left'>
                <div className='header-container-left-men'>
                    Men
                </div>
                <div className='header-container-left-women'>
                    Women
                </div>
                <div className='header-container-left-kids'>
                    Kids
                </div>
                <div className='header-container-left-socks'>
                    Socks
                </div>
                <div className='header-container-left-sale'>
                    Sale
                </div>
            </div>
            <div className='header-container-center'>
                <img src="" alt="LOGO" />
            </div>
            <div className='header-container-right'>
                <div className='header-container-right-search'>
                    <input id='search-header' type="text" placeholder='Search' />
                    <button className='btn-header'>Search</button>
                </div>
                <div className='header-container-right-user'>
                    User
                </div>
                <div className='header-container-right-help'>
                    Help
                </div>
                <div className='header-container-right-cart'>
                    Cart
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header