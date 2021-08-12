// import React from 'react'
import React, { useState} from 'react';
import Registerbg from '../assets/images/Register_bg.svg'
import RegisterLeftIcon from '../assets/images/register_left_icon.svg'
import RegisterRightOne from '../assets/images/register_right-1.svg'
import RegisterRightTwo from '../assets/images/register_right-2.svg'
import Registerusericon from '../assets/images/register-user-icon.svg'
import Logo from "../assets/images/Logo.svg";
import usericon from '../assets/images/user-icon.svg';
import emailicon from '../assets/images/email-icon.svg';
import passwordicon from '../assets/images/password-icon.svg';
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import googleplus from '../assets/images/googleplus.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'
import axios from "axios";
import { browserName } from 'react-device-detect';
import {Link} from 'react-router-dom';
import '../assets/css/animation.css';

const Register = ({history}) => {
    const [Fullname, setFullname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [RePassword, setRePassword] = useState('');
    const [FullnameError, setFulnameError] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [RePasswordError, setRePasswordError] = useState('');
    function getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
      
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
        }
        return os;
    }
    function handleVallidation() {
        let formIsValid = true;
        if (!Fullname) {
            formIsValid = false;
            setFulnameError("Please enter your name");
        } else {
            setFulnameError("");
        }
        if (!Password) {
          formIsValid = false;
          setPasswordError("Please enter password")
        } else {
            setPasswordError("");
        }
        
        if (Password !== "") {
          if (Password.length <= 6) {
            formIsValid = false;
            setPasswordError("Password must be longer than 6 characters");
          } else {
            setPasswordError("");
          }
        } 
        if (!RePassword) {
            formIsValid = false;
            setRePasswordError("Please re enter your password");
        } else {
            setRePasswordError("");
        }
        if (RePassword) {
            if ( Password !== RePassword) { 
                formIsValid = false;
                setRePasswordError("The Password ypu entered do not match. Please re-enter your password.");
            } else {
                setRePasswordError("");
            }
        }
        if (!Email) {
          formIsValid = false;
          setEmailError("Please enter email");
        } else {
            setEmailError("");
        }
        if (Email !== "") {
          let lastAtPos = Email.lastIndexOf('@');
          let lastDotPos = Email.lastIndexOf('.');
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && Email.indexOf('@@') === -1 && lastDotPos > 2 && (Email.length - lastDotPos) > 2)) {
            formIsValid = false;
            setEmailError("Please enter valid email");
          } else {
            setEmailError("");
        }
        } 
        return formIsValid;
    }
    const submitValue = (e) => {
        e.preventDefault();
        if (handleVallidation()) {
            const formData = {
                fullName: Fullname,
                email: Email,
                password: Password,
                // RePassword: RePassword,
                os: getOS(),
                browser: browserName,
                ipAddress: "",
                network: "LAN",
            }
            console.log("line 60",formData, browserName)
            axios.post("http://localhost:3030/api/v1/signup",formData).then(res => {   
                console.log("line 63",res)
                if(res.status === 200) {
                    history.push("/signin")
                }
            })
        }
    }
    return (
        <div className={['h-screen overflow-hidden']}>
            <div className={['relative']}>
            <div className={['sm:flex sm:justify-center sm:items-center sm:right-10 absolute right-20 flex lg:flex-col lg:justify-center top-12 ']}>
                <Link to="/"><img src={Logo} alt="" className={['mb-2 transform scale-75 slide-in-top']} /></Link>
                <Link to="dashboard"><button className={['sm:py-1 py-2 px-8 text-sm border font-light rounded-full slide-in-top']}>SKIP</button></Link>
            </div>
            <div className={['w-3/12 2xl:w-1/3 mx-auto pt-32 sm:w-8/12']} style={{zIndex : '1000'}}>
                <div className={['flex justify-center']}>
                <img src={Registerusericon} alt="" className={['sm:scale-50 transform lg:scale-75 tilt-in-top-1']} />
                </div>
                <form className={[""]}>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4 slide-in-fwd-center']}>
                        <img src={usericon} alt="" className={['mr-5 transform']} />
                        <input type="text" name="" id="" placeholder="Fullname" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={e => setFullname(e.target.value)}/>
                    </div>
                    <span style ={{color: "red"}}>{FullnameError}</span>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4 slide-in-fwd-center']}>
                        <img src={emailicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="text" name="" id="" placeholder="Email" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <span style ={{color: "red"}}>{EmailError}</span>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4 slide-in-fwd-center']}>
                        <img src={passwordicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="password" name="" id="" placeholder="Password" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <span style ={{color: "red"}}>{PasswordError}</span>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4 slide-in-fwd-center']}>
                        <img src={passwordicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="password" name="" id="" placeholder="Re-Password" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={e => setRePassword(e.target.value)}/>
                    </div>
                    <span style ={{color: "red"}}>{RePasswordError}</span>
                    <div className={['flex justify-center mt-16 sm:mt-8']}>
                        <button className={['py-2 px-8 text-sm font-light border rounded-full slide-in-fwd-bottom']} onClick={(event) => submitValue(event)}>SIGN UP</button>
                    </div>
                </form>
            </div>
            <img src={Registerbg} alt="" className={['absolute scale-125 transform object-contain']} style={{top : '520px', zIndex: '-1'}} />
            <img src={RegisterLeftIcon} alt="" className={['absolute transform scale-90 -left-10 hidden lg:block lg:scale-75 lg:-left-52 2xl:scale-90 2xl:-left-10']} style={{top : '300px', zIndex: '-1'}} />
            <img src={RegisterRightOne} alt="" className={['absolute transform scale-90 right-10 hidden lg:block lg:scale-75 lg:right-0 2xl:scale-90 2xl:right-10']} style={{top : '300px', zIndex: '-1'}} />
            <img src={RegisterRightTwo} alt="" className={['absolute transform scale-90 -right-10 hidden lg:block lg:scale-75 lg:-right-20 2xl:scale-90 2xl:right-10']} style={{top : '300px', zIndex: '-1'}} />
            <div className={["flex justify-center pt-16 pb-12 sm:pt-12 lg:pt-16 2xl:pt-32 slide-in-fwd-bottom"]}>
                <img src={facebook} alt="" className={['transform lg:scale-75 sm:scale-50']} />
                <img src={instagram} alt="" className={['transform lg:scale-75 sm:scale-50']} />
                <img src={googleplus} alt="" className={['transform lg:scale-75 sm:scale-50']} />
                <img src={linkedin} alt="" className={['transform lg:scale-75 sm:scale-50']} />
                <img src={twitter} alt="" className={['transform lg:scale-75 sm:scale-50']} />
            </div>
        </div>
        </div>
    )
}

export default Register
