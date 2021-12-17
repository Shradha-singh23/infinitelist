import React from 'react';
import './Header.css'

export default function Header(){
    return(
        <>
            <header className='main-container'>
                <div className='label-container'>
                    <h1 className='heading'>Samira Restaurant</h1>
                    <p className='cuisine-type'>North Indian, Mughlai</p>
                    <p className='address'>Leader Road, Allahabad</p>
                </div>
                <div className='rating-container'>
                    <div className='rating'>
                        <span> 3.6 </span>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className='review-description-container'>
                        <span className='review-value'>97</span>
                        <p className='review-description'>Dining Reviews</p>
                    </div> 
                </div>
                <div className='rating-container'>
                    <div className='rating'>
                        <span> 3.7 </span>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className='review-description-container'>
                        <span className='review-value'>4313</span>
                        <p className='review-description'>Delivery Reviews</p>
                    </div> 
                </div>
            </header>
            <nav className='navigation-bar'>
                <div className='navigation-items'>
                    Overview
                    <hr className='horizontal-line'/>
                </div>
                <div className='active-item'>
                    Order Online
                    <hr className='active-horizontal-line'/>
                </div>
                <div className='navigation-items'>
                    Reviews
                    <hr className='horizontal-line'/>
                </div>
                <div className='navigation-items'>
                    Menu
                    <hr className='horizontal-line'/>
                </div>
                <div className='navigation-items'>
                    Photos
                    <hr className='horizontal-line'/>
                </div>
            </nav>
        </>
    )
}