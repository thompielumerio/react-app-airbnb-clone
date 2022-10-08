import React from 'react'
import './Style.css'

function Hero() {
  return (
    <section>
        <div className="img-container">
            <img src="./img/photo-grid.png" className="hero--photo" />
        </div>
        <div className="herotext-container">
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </section>
  )
}

export default Hero