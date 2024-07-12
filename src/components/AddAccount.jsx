import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AddAccount.css'
import Footer from './Footer'
const AddAccount = () => {
    return (
        <>
        <div className='main-container'>
            <div className="form-container form">
                <div className="loginpart">
                    <h1 className='logo'>Friends/Forever</h1>
                    <h4>Sign up to see photos and videos from your friends.</h4>
                    <button className='loginbtn'>Login With Facebook</button>
                </div>
                <div className='horizontal-line'>
                    <span>OR</span>
                </div>
                <div className="registerpart">
                    <form action="">
                        <input type="text"  placeholder='Mobile Number Or Email Address'/>
                        <input type="text" placeholder='Enter Full Name'/>
                        <input type="text" placeholder='Enter Username' />
                        <input type="text" placeholder='Enter Password' />
                        <p>People who use our service may have uploaded your contact information to Instagram.<Link >Learn more</Link></p>  <br />
                        <p>By signing up, you agree to our <Link>Terms</Link>, <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link>.</p>

                        <button className='loginbtn'>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="alreadyaccount">
            Have an account?<Link to="/">Log in</Link>
            </div>
          
        </div>
        <Footer/>
        </>

    )
}

export default AddAccount