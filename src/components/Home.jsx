import React from 'react'
import hompage from '../images/hompage.png'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import Footer from './Footer'
const Home = () => {
    return (
        <div className="home">
        <div className='homepage'>
            <div className="imagepart">
                <div className="image-container">
                    <img src={hompage} alt="logo"  className="homepageImage"/>
                </div>
            </div>
            <div className="formpart">
                <div className="form">
                    <h1 className='logo'>Friends/Forever</h1>
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder='Phone Number, Email or User Name' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Enter Password' />
                        </div>
                        <div className="form-group">
                            <button className='loginbtn'>Login</button>
                        </div>
                    </form>
                    <div className='horizontal-line'>
                    <span>Or</span>
                    </div>
                    <div className="outerlogin">
                        <div className="linkpart">
                           <h4> <Link to="/">Login By Facebook</Link></h4>
                        </div>
                        <div className="forgotpassword">
                            <Link to="/">forgot password?</Link>
                        </div>
                    </div>
                </div>
            </div>   
            <div className="form-signup">
                    <p className="text-part">Don't have an account?</p> <Link to="/register">Sign up</Link>
            </div>
        </div>
        <Footer/>
        </div>
 
    )
}

export default Home