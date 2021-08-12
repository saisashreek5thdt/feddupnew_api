import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

import {Home, Signin, Signout, Register, Dashboard, Adminlogin, Admindashboard, Forgotpassword, Error} from './pages';

function App() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/signout" component={Signout} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/adminlogin" component={Adminlogin} exact />
      <Route path="/admindashboard" component={Admindashboard} exact />
      <Route path="/forgotpassword" component={Forgotpassword} exact />
      <Route path="/" component={Home} exact />
      <Route path="/error" component={Error} exact/>
      <Redirect to="/error" />
    </Switch>
  );
}

export default App;
