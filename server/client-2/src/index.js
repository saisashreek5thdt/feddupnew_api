import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Demo extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch >
          <Route exact path="/linkedin" component={LinkedInPopUp} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
