import React from 'react'
import './Preloader.css'

const Preloader = ({isFull = false}) => {
    return (
        <div className={`preloader ${isFull ? 'preloader_full' : ''}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
