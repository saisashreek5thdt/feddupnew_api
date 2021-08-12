// import React from 'react'
import React, { useState } from 'react';
import Logo from "../assets/images/Logo.svg";
import usericon from '../assets/images/user-icon.svg';
import loginrunnning from '../assets/images/login-running.svg';
import loginbg from '../assets/images/loginbg.svg'
import Registerusericon from '../assets/images/register-user-icon.svg'
import RegisterLeftIcon from '../assets/images/register_left_icon.svg'
import backicon from '../assets/images/back.svg'
import passwordicon from '../assets/images/password-icon.svg';
import {Link} from 'react-router-dom';
import '../assets/css/animation.css';
import axios from "axios";
// import emailicon from '../assets/images/email-icon.svg';

const Signin = ({history}) => {
    console.log(history)
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [UsernameError, setUsernameError] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    function handleVallidation() {
        let formIsValid = true;
        if (!Password) {
          formIsValid = false;
          setPasswordError("Please enter password")
        }
        if (Password !== "") {
          if (Password.length <= 6) {
            formIsValid = false;
            setPasswordError("Password must be longer than 6 characters");
          }
        }
        if (!Username) {
          formIsValid = false;
          setUsernameError("Please enter Username");
        }
        if (Username !== "") {
          let lastAtPos = Username.lastIndexOf('@');
          let lastDotPos = Username.lastIndexOf('.');
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && Username.indexOf('@@') === -1 && lastDotPos > 2 && (Username.length - lastDotPos) > 2)) {
            formIsValid = false;
            setUsernameError("Please enter valid Username");
          }
        }
        return formIsValid;
    }
    const submitValue = (e) => {
        e.preventDefault();
        if (handleVallidation()) {
            const formData = {
                username: Username,
                password: Password
            }
            axios.post("http://localhost:3030/api/v1/login/",formData).then(res => {   
                if(res.status === 200) {
                    if(res.data.token) {
                        history.push("/dashboard")
                    }
                }
            })
        }
    }
    return (
        <div className={['h-screen overflow-hidden']}>
            <div className={['flex justify-between absolute top-8 w-full px-24']}>
                <img src={backicon} alt="" className={['transform sm:scale-75']} style={{zIndex: '1'}} onClick={() => history.goBack()} />
                <Link to="/"><img src={Logo} alt="" className={['transform scale-90 slide-in-top']} /></Link>
            </div>
            <div className={['xl:w-3/12 mx-auto pt-44 sm:w-9/12 sm:pt-36 md:pt-52 lg:w-2/4']} style={{zIndex : '1000'}}>
                <div className={['flex justify-center']}>
                <img src={Registerusericon} alt="" className={['transform lg:scale-100 sm:scale-50 tilt-in-top-1']} />
                </div>
                <form className={["mt-8"]}>
                    <div className={['flex border xl:py-4 px-5 rounded rounded-full mb-14 bg-white sm:py-3 sm:mb-8 slide-in-fwd-center']}>
                        <img src={usericon} alt="" className={['mr-5 transform']} />
                        <input type="text" name="" id="" placeholder="Username" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <span>{UsernameError}</span>
                    <div className={['flex border xl:py-4 px-5 rounded rounded-full mb-10 bg-white opacity-80 sm:py-3 sm:mb-8 slide-in-fwd-center']}>
                        <img src={passwordicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="password" name="" id="" placeholder="Password" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <span>{PasswordError}</span>
                    <div className={['text-center mt-12 slide-in-fwd-center']}>
                        <button className={['py-2 px-8 text-sm font-light bg-white border rounded-full']} onClick={(event) => submitValue(event)}>SIGN IN</button>
                    </div>
                    <div className={['flex justify-center mt-4']} style={{zIndex : '10000'}}>
                        <Link to="adminlogin"><button className={['sm:text-gray-600 py-2 px-8 mx-4 text-sm font-light xl:text-white border rounded-full cursor-pointer slide-in-fwd-bottom']} onClick={() => console.log('admin')}>ADMIN</button></Link>
                        <Link to="dashboard"><button className={['py-2 px-8 mx-4 sm:text-gray-600 text-sm font-light xl:text-white border rounded-full cursor-pointer slide-in-fwd-bottom']} onClick={() => history.push('dashboard')}>SKIP</button></Link>
                    </div>
                    <Link to="/forgotpassword"> <p className={['text-white text-center mt-6 pulsate-fwd']}>Forgot Password ? <span className={['text-gray-100']}>Click Here...</span> </p> </Link>
                </form>
            </div>
            <img src={loginbg} alt="" className={['-mt-10 absolute top-0']} style={{zIndex: '-1'}} />
            <img src={RegisterLeftIcon} alt="" className={['absolute transform scale-90 -left-10 hidden xl:block']} style={{top : '100px', zIndex: '1'}} />
            <img src={loginrunnning} alt="" className={['absolute transform scale-90 right-32 hidden xl:block']} style={{top : '230px', zIndex: '0'}} />
            <div className={['flex justify-center']} style={{zIndex : '-1000'}}>
                <img src={Logo} alt="" className={['xl:mt-24 sm:mt-12']} />
            </div>
        </div>
    )
}

export default Signin
