import React, { Component } from "react";
import bg from "../assets/images/Home_bg_1.svg";
import Logo from "../assets/images/Logo.svg";
import HomeIllustration from "../assets/images/Home_illustration.svg";
import HomeUser from "../assets/images/Home_user.svg";
import {Link} from 'react-router-dom'

class Home extends Component {
    render () {
        return(
            <div className={["relative w-screen"]}>
                <img src={bg} alt="" className={["h-screen w-screen object-cover"]} />
                <div className={["absolute top-0 left-0 right-0 py-12"]}>
                    <div className={["flex w-10/12 mx-auto justify-between"]}>
                    <Link to="/"><img src={Logo} alt="" /></Link>
                    <ul className={["flex align-center items-center"]}>
                        <li> <Link to="signup" className={['mx-3 font-light bg-white px-5 py-2 rounded rounded-full text-sm text-gray-500']}>SIGN UP</Link> </li>
                        <li> <Link to="signin" className={['mx-3 font-light bg-white px-5 py-2 rounded rounded-full text-sm text-gray-500']}>SIGN IN</Link> </li>
                        <li> <a href="/" className={['']}> <img src={HomeUser} alt="" /> </a> </li>
                    </ul>
                    </div>
                    <div className={['sm:mt-32 mt-16 w-10/12 mx-auto lg:flex']}>
                    <div className={['xl:w-1/2 lg:w-11/12 xl:pr-10']}>
                        <h2 className={['sm:text-7xl xl:text-8xl font-extrabold text-white leading-0 2xl:text-9xl']}>Business <span className={['font-thin mt-0']}>workflow</span></h2>
                        <p className={['sm:text-xl sm:font-light sm:mt-6 xl:text-xl font-thin text-white xl:mt-10 leading-10']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                        amet aliquam itaque harum accusantium perferendis cum quas
                        expedita rerum magnam.
                        </p>
                    </div>
                    <div>
                        <img src={HomeIllustration} alt="" className={['hidden lg:block']} />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;