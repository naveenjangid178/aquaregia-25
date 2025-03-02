import React from 'react'
import './EventCard.css'
import Logo from "./Logo"
import { Link } from 'react-router-dom'

const EventCard = ({imageUrl, eventName, coordinator, contact}) => {
  return(
<div className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div id="card">
      <div className="card-content">
        <div className="card-glare"></div>
        <div className="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        <p id="prompt" className='p-4 rounded-lg flex flex-col gap-4'>
          <img src={imageUrl} className='rounded-lg h-40 object-cover' />
          <p className='text-xl'>{eventName}</p>
        </p>
        <div className="title"><Logo className={"w-4"} /> <br />{eventName}</div>
        <div className="glowing-elements">
          <div className="glow-1"></div>
          <div className="glow-2"></div>
          <div className="glow-3"></div>
        </div>
        <div className="subtitle">
          <span className="highlight">
            {coordinator}: {contact}
          </span>
        </div>
        <div className="card-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div className="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="scan-line"></div>
      </div>
    </div>
  </div>
</div>
  )
}

export default EventCard