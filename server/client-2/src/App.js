import React from "react"
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import LinkedInPage from "./linkedinpage";
import axios from"axios"
import './App.css';

function App() {
  const responseSuccessGoogle = (response) => {
    console.log(response)
    const data={
      tokenId:response.tokenId
    }
    axios.post('http://localhost:3030/api/v1/googlelogin', data
    ).then(response=>{
      console.log(response)
    })
  }
  const responseFacebook = (response) => {
    console.log(response);
    const data={
      accessToken:response.accessToken,
      userID:response.userID
    }
    axios.post('http://localhost:3030/api/v1/facebooklogin', data
    ).then(response=>{
      console.log("facebook response is done",response)
    })
  }
  const responseErrorGoogle=(response)=>{
    console.log("err",response)
  }

  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
    const response={
      token:data.oauth_token,
      newData:{
        email:data.screen_name
      }
    }
    axios.post('http://localhost:3030/api/v1/twitterlogin', response
    ).then(response=>{
      console.log("twitter response is done",response)
    })
  };
 
  return (
    <div className="col-md-6 offset-md-3 text-center">
     <h1>login from google</h1>
     <GoogleLogin
      clientId="1015319600953-vs0ae0bm9eua4e4rrhtn0os2cdll77n1.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseSuccessGoogle}
      onFailure={responseErrorGoogle}
      cookiePolicy={'single_host_origin'}
  />,
  <div className="col-md-6 offset-md-3 text-center">
     <h1>login from Facebook</h1>
  <FacebookLogin
    appId="244607770821133"
    autoLoad={false}
    callback={responseFacebook} />,
    </div>
    <ReactTwitterLogin
      authCallback={authHandler}
      consumerKey="1asSwpbFuICXfIxt9nikswjM5" 
      consumerSecret="QoZ0yqBFeN67wuUI4HxVJOXRKxPPSYW6qbmCdtYgYeh3bm4AJ2" 
    />
    <LinkedInPage/>
    {/* <div className="col-md-6 offset-md-3 text-center">
    <h1>login from Linkedin</h1>
        <LinkedIn 
          clientId="81lx5we2omq9xh"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/linkedin"
        >
          <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div> */}
    </div>
  );
}

export default App;
