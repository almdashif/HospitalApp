import React, { useState } from 'react'
import './loginPage.css'
import { IoIosPerson } from "react-icons/io";
import { FaEye, FaEyeSlash, FaUserLock, FaHospitalAlt, FaHandHoldingMedical, FaBriefcaseMedical } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { RiShieldKeyholeFill } from "react-icons/ri";

const LoginPage = () => {
    const [Visible, setVisible] = useState(false)
    const ChangeVisible = (e) => {
        e.preventDefault();
        setVisible(!Visible)
    }
    return (
        <section id='loginSection'>
            <div className="container">
                <div className="leftContainer">
                    <div className="formContainer">
                        <div className="headings">
                            <h5>Welcome To</h5>
                            <div className="companyDetails">
                                <FaHandHoldingMedical className='icon' color='red' />
                                <h2>Data Apps</h2>
                            </div>
                            <p>Log in to get in the moment updates on the things that interest you</p>

                        </div>
                        <form action="" onSubmit={(e) => e.preventDefault()}>
                            <div className="formInputContainer">
                                <IoIosPerson />
                                <input type="text" name="email" id="email" placeholder='username' />
                            </div>
                            <div className="formInputContainer">
                                <RiShieldKeyholeFill />
                                <input type={Visible ? "text" : "password"} name="password" id="password" placeholder='password' />
                                <a onClick={ChangeVisible} style={{ marginBottom: '-4px', cursor: 'pointer' }}>{Visible ? <FaEye color="#444444" /> : <FaEyeSlash color="#444444" />}</a>
                            </div>
                            <div className='forgetPass'><a href="" onClick={e => e.preventDefault()}>forget password?</a></div>
                            <button className='signInBtn'>sign in</button>
                        </form>

                        <div className="appLogos">
                            <div className="logoContainer">
                                <img src="https://imgs.search.brave.com/ba8wn0zngceGZl8j9ALpGsHgDBJr8wdvVOUd4BewK-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlkL2Iz/L2RjLzlkYjNkYzM4/MmRjY2E4OTBkYjkw/ODY1ZmI2OGM4ODMx/LmpwZw" alt="companyLogo" />
                            </div>
                            <div className="logoContainer">
                                <img src="https://imgs.search.brave.com/ba8wn0zngceGZl8j9ALpGsHgDBJr8wdvVOUd4BewK-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlkL2Iz/L2RjLzlkYjNkYzM4/MmRjY2E4OTBkYjkw/ODY1ZmI2OGM4ODMx/LmpwZw" alt="companyLogo" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="rightContainer">
                    <div className="imgContainer">
                        <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HospitalImage" />
                        <img src="https://plus.unsplash.com/premium_photo-1677610855678-07b0380485db?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HospitalImage" />
                        <img src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HospitalImage" />
                        <img src="https://plus.unsplash.com/premium_photo-1661551351551-e2a3774a0af9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HospitalImage" />
                    </div>
                </div>


            </div>

            <div className="overlay-left">
                <FaBriefcaseMedical color='orange' size={"5rem"} style={{ margin: '2rem 0 0 3rem '}}/>
            </div>
            <div className="overlay-right">
                <FaBriefcaseMedical color='orange' size={"2rem"} style={{ margin: '0 4rem 1rem 0' }} />
            </div>
        </section>
    )
}

export default LoginPage
