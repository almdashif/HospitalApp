import React from 'react'
import './loginPage.css'
import { IoIosPerson } from "react-icons/io";
import { FaEye, FaEyeSlash, FaUserLock, FaHospitalAlt, FaBriefcaseMedical } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";

const LoginPage = () => {
    return (
        <section id='loginSection'>
            <div className="container">
                <div className="leftContainer">
                    <div className="formContainer">
                        <div className="headings">
                            <h5>Welcome To</h5>
                            <div className="companyDetails">
                                <IoInfinite className='icon' color='red' />
                                <h2>Data Apps</h2>
                            </div>
                            <p>Please fill the details to Login to your Account</p>

                        </div>
                        <form action="">
                            <div className="formInputContainer">
                                <IoIosPerson />
                                <input type="text" name="email" id="email" placeholder='username' />
                            </div>
                            <div className="formInputContainer">
                                <FaUserLock />
                                <input type="text" name="password" id="password" placeholder='password' />
                                <a href="" style={{ marginBottom: '-4px' }}><FaEye color="#444444" /></a>
                            </div>
                            <div className='forgetPass'><a href="">forget password?</a></div>
                            <button className='signInBtn'>sign in</button>
                        </form>

                        {/* <div className="appLogos">
                            <FaUserDoctor className='logo' />
                            <FaHospitalAlt className='logo' />

                        </div> */}
                    </div>

                </div>
                <div className="rightContainer">
                    <div className="imgContainer">
                        <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img src="https://plus.unsplash.com/premium_photo-1677610855678-07b0380485db?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img src="https://plus.unsplash.com/premium_photo-1661551351551-e2a3774a0af9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    </div>
                </div>


            </div>

            <div className="overlay-left">
                <FaBriefcaseMedical color='red' size={"5rem"} />
            </div>
            <div className="overlay-right">
                <FaBriefcaseMedical color='orange' size={"2rem"} style={{margin:'2.5rem 0 0 1.5rem'}} />
            </div>
        </section>
    )
}

export default LoginPage

// https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D