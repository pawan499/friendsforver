import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <div className="footer">
        <Link to="/">Meta</Link>
        <Link to="/">About</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Help</Link>
        <Link to="/">API</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Terms</Link>
        <Link to="/">Locations</Link>
        <Link to="/">Friends/Forever Lite</Link>
        </div>  
    </div>
  )
}

export default Footer