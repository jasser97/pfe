import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import SignUpForm from "./SingUpForm";
import SignInForm from "./SingInForm";
import logo from "../../images/logo2.png";

import "./login.css";

class SingUpIn extends Component {
  render() {
    return (
      <div className="sing">
        <div className="sing__Aside">
          <Link to="/">
            <img src={logo} alt="logo2" />
          </Link>
        </div>
        <div className="sing__Form">
          <div className="PageSwitcher">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i>
            </Link>
            <div>
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>
          </div>

          <div
            style={{
              marginTop: -55,
            }}
            className="FormTitle"
          >
            <NavLink
              to="/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>
            or
            <NavLink
              to="/sign-up"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
          <Route path="/sign-in" component={SignInForm} />
          <Route path="/sign-up" component={SignUpForm} />
        </div>
      </div>
    );
  }
}

export default SingUpIn;
