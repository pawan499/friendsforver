import React from 'react'
import '../css/Chatpage.css'
import Peoples from './Peoples'
const Chatpage = () => {
  return (
   <div className="container">
        <div className="header">
            <div className="logo">
                <h1 className='logo'>Friends/Forever</h1>
            </div>
            <div className="camera">
                <i className='fa fa-camera'></i>
            </div>
            <div className="option">
            <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
        <div className="serchbox">
            <input type="text" placeholder='serch by username or mobile'/>
            <i className='fa fa-search'></i>
        </div>
        <div className="peoples">
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
            <Peoples/>
        </div>

        <div className="footer-content">
            <div className='chats'>
            <i className="fa-regular fa-message"></i>
            <p>Chats</p>
            </div>
            <div className="updates">
            <i className=" fa far fa-circle"></i>

            <p>Updates</p>
            </div>

            <div className="communication">
            <i className="fa fa-solid fa-user-group"></i>
                <p>Communication</p>
            </div>
            <div className="calls">
                <i className="fa fa-phone"></i>
                <p>Calls</p>
            </div>
        </div>
   </div>
  )
}

export default Chatpage