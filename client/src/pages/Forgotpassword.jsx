import React from 'react'

import Registerbg from '../assets/images/Register_bg.svg'
import RegisterLeftIcon from '../assets/images/register_left_icon.svg'
import RegisterRightOne from '../assets/images/register_right-1.svg'
import RegisterRightTwo from '../assets/images/register_right-2.svg'
import Registerusericon from '../assets/images/register-user-icon.svg'
import Logo from "../assets/images/Logo.svg";
import emailicon from '../assets/images/email-icon.svg';

// import passwordicon from '../assets/images/password-icon.svg';
// import facebook from '../assets/images/facebook.svg'
// import instagram from '../assets/images/instagram.svg'
// import googleplus from '../assets/images/googleplus.svg'
// import linkedin from '../assets/images/linkedin.svg'
// import twitter from '../assets/images/twitter.svg'

import {Link} from 'react-router-dom'

const Forgotpassword = () => {
    return (
        <div className={['h-screen overflow-hidden']}>
            <div className={['relative']}>
            <div className={['sm:flex sm:justify-center sm:items-center sm:right-10 absolute right-20 flex lg:flex-col lg:justify-center top-12 ']}>
                <Link to="/"><img src={Logo} alt="" className={['mb-2 transform scale-75']} /></Link>
                <Link to="dashboard"><button className={['sm:py-1 py-2 px-8 text-sm border font-light rounded-full']}>SKIP</button></Link>
            </div>
            <div className={['w-3/12 2xl:w-1/3 mx-auto pt-32 sm:w-8/12']} style={{zIndex : '1000'}}>
                <div className={['flex justify-center']}>
                <img src={Registerusericon} alt="" className={['sm:scale-50 transform lg:scale-75']} />
                </div>
                <form className={[""]}>
                    <p className={['text-pink-400 text-center mb-3 mt-8']}>Enter Your Email To Reset Password.</p>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4']}>
                        <img src={emailicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="email" name="" id="" placeholder="Email" className={["bg-transparent w-full focus:outline-none border-0"]} />
                    </div>
                    <div className={['flex justify-center mt-16 sm:mt-8']}>
                        <button className={['py-3 px-8 text-sm font-normal text-gray-700 hover:text-gray-100 hover:bg-pink-400 transition all .5s    shadow-lg border rounded-full']}>SEND PASSWORD RESET LINK.</button>
                    </div>
                </form>
            </div>
            <img src={Registerbg} alt="" className={['absolute scale-125 transform object-contain']} style={{top : '520px', zIndex: '-1'}} />
            <img src={RegisterLeftIcon} alt="" className={['absolute transform scale-90 -left-10 hidden lg:block lg:scale-75 lg:-left-52 2xl:scale-90 2xl:-left-10']} style={{top : '300px', zIndex: '-1'}} />
            <img src={RegisterRightOne} alt="" className={['absolute transform scale-90 right-10 hidden lg:block lg:scale-75 lg:right-0 2xl:scale-90 2xl:right-10']} style={{top : '300px', zIndex: '-1'}} />
            <img src={RegisterRightTwo} alt="" className={['absolute transform scale-90 -right-10 hidden lg:block lg:scale-75 lg:-right-20 2xl:scale-90 2xl:right-10']} style={{top : '300px', zIndex: '-1'}} />
        </div>
        </div>
    )
}

export default Forgotpassword
