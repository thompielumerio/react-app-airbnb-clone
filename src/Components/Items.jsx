import React from 'react'
import './Style.css'

function Items() {
  return (
    <div className="items-container">
       <div className="item">
            <img src="./img/swim.png" className="card--image" />
            <div className="card--stats">
            <img src="./img/star.png" className="card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie</p>
            <p><span className="bold">From $136</span> / person</p>
       </div>
       <div className="item">
            <img src="./img/wedding.png" className="card--image" />
            <div className="card--stats">
            <img src="./img/star.png" className="card--star" />
            <span>5.0</span>
            <span className="gray">(30) • </span>
            <span className="gray">USA</span>
            </div>
            <p>Learn wedding photography</p>
            <p><span className="bold">From $125</span> / person</p>
       </div>
       <div className="item">
            <img src="./img/bike.png" className="card--image" />
            <div className="card--stats">
            <img src="./img/star.png" className="card--star" />
            <span>4.8</span>
            <span className="gray">(2) • </span>
            <span className="gray">USA</span>
            </div>
            <p>Group Mountain Biking</p>
            <p><span className="bold">From $50</span> / person</p>
       </div>
       
    </div>
  )
}

export default Items