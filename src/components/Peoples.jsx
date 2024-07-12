import React from 'react'
import profile from '../images/unnamed.png'
import '../css/Peoples.css'
const Peoples = () => {
  return (
    <div className='people-container'>
        <div className="imagecotainer">
                <img src={profile} alt="" className="profile-pic"/>
        </div>
        <div className="people-name">
                <div className="user-name"> +919956560357</div>
                <div className="last-message">
                    <p>Hello</p>
                </div>
        </div>
        <div className="time counting">
                <div className="timestamp">
                    {"11:01 AM"}
                </div>
                <div className="message-count">
                    <span>210</span>
                </div>
        </div>
    </div>
  )
}

export default Peoples