import React, { Component } from 'react'

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
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Signup extends Component {
    state = {
        isRegistered: false,
        user: {},
        errors:{}
      };
    
      validate=()=>{
      let user = this.state.user;
      let errors = {};
      let isValid = true;
      if (!user["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!user["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (!user["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!user["confirmPassword"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
   
        if (user["password"] !==user["confirmPassword"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
        this.setState({
            errors: errors
          });
      
          return isValid;
      } 
    
      register = async () => {
        if(validate()){
        let newData = await axios
        .post('http://localhost:3030/api/v1/signup', this.state.user)
        .then((response) => response.data)
        .catch(() => false);
        console.log(newData)
        const { user, msg } = newData
        if (user) {
          this.setState({
            isRegistered: true,
          });
        } else {
          this.setState({
            ...this.state,
            text: msg,
          });
        }
      }
    };
    
      onChange = (e) => {
        this.setState({
          ...this.state,
          text: "",
          user: {
            ...this.state.user,
            [e.target.name]: e.target.value,
          },
        });
      };
    render () {
        if (!this.props.auth.isAuth) {
            return <Redirect to="/login" />;
          }
        return(
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
                        <span className="badge bg-dark mt-4">{this.state.text}</span>
                            <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4']}>
                                <img src={usericon} alt="" className={['mr-5 transform']} />
                                <input type="text" name="fullName" id="" placeholder="Fullname" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={this.onChange}/>
                                <div className="text-danger">{this.state.errors.fullName}</div>
                            </div>
                            <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4']}>
                                <img src={emailicon} alt="" className={['mr-5 transform scale-75']} />
                                <input type="text" name="email" id="" placeholder="Email" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={this.onChange}/>
                                <div className="text-danger">{this.state.errors.email}</div>
                            </div>
                            <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4']}>
                                <img src={passwordicon} alt="" className={['mr-5 transform scale-75']} />
                                <input type="text" name="password" id="" placeholder="Password" className={["bg-transparent w-full focus:outline-none border-0"]} onChange={this.onChange}/>
                                <div className="text-danger">{this.state.errors.password}</div>
                            </div>
                            <div className={['flex border py-4 px-5 rounded rounded-full mb-10 sm:py-2 sm:mb-6 lg:py-3 lg:mb-8 2xl:py-4']}>
                                <img src={passwordicon} alt="" className={['mr-5 transform scale-75']} />
                                <input type="text" name="confirmPassword" id="" placeholder="Re-Password"onChange={this.onChange} className={["bg-transparent w-full focus:outline-none border-0"]} />
                                <div className="text-danger">{this.state.errors.confirmPassword}</div>
                            </div>
                            <div className={['flex justify-center mt-16 sm:mt-8']}>
                                <button className={['py-2 px-8 text-sm font-light border rounded-full']} onClick={this.register}>SIGN IN</button>
                            </div>
                        </form>
                    </div>
                    <img src={Registerbg} alt="" className={['absolute scale-125 transform object-contain']} style={{top : '520px', zIndex: '-1'}} />
                    <img src={RegisterLeftIcon} alt="" className={['absolute transform scale-90 -left-10 hidden lg:block lg:scale-75 lg:-left-52 2xl:scale-90 2xl:-left-10']} style={{top : '300px', zIndex: '-1'}} />
                    <img src={RegisterRightOne} alt="" className={['absolute transform scale-90 right-10 hidden lg:block lg:scale-75 lg:right-0 2xl:scale-90 2xl:right-10']} style={{top : '300px', zIndex: '-1'}} />
                    <img src={RegisterRightTwo} alt="" className={['absolute transform scale-90 -right-10 hidden lg:block lg:scale-75 lg:-right-20 2xl:scale-90 2xl:right-10']} style={{top : '300px', zIndex: '-1'}} />
                    <div className={["flex justify-center pt-16 pb-12 sm:pt-12 lg:pt-16 2xl:pt-32"]}>
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

}
function mapStateToProps(state) {
    return state;
  }

export default connect(mapStateToProps)(Signup);