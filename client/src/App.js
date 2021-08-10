import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Home, Signin, Signup, Dashboard, Error, Forgotpassword, Adminlogin, Admindashboard} from './pages';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/forgotpassword" component={Forgotpassword} exact />

          <Route path="/adminlogin" component={Adminlogin} exact />
          <Route path="/admindashboard" component={Admindashboard} exact />

          <Route path="/error" component={Error} exact/>
          <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;
