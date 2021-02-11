import React from "react"
import Signup from "./authentication/Signup"
import Login from "./authentication/Login"
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import Profile from "./authentication/Profile"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;