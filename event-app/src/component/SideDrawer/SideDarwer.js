import React from "react";
import "./SideDrawer.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const SideDrawer = (props) => {
  let DrawerClasses = "SideDrawer";
  if (props.show) {
    DrawerClasses = "SideDrawer open";
  }
  const scrollToTp = () => {
    scroll.scrollTo(-10);
  };

  const scrollToApropos = () => {
    scroll.scrollTo(500);
  };

  const scrollToEvents = () => {
    scroll.scrollTo(910);
  };

  const scrollToOrganisateure = () => {
    scroll.scrollTo(1670);
  };

  return (
    <nav className={DrawerClasses}>
      <ul>
        <li>
          <Link to="/" onClick={scrollToTp}>
            ACCUEIL
          </Link>
        </li>
        <li>
          <Link to="/" onClick={scrollToApropos}>
            À PROPOS
          </Link>
        </li>
        <li>
          <Link onClick={scrollToEvents} to="/">
            ÉVÈNEMENTS PROCHE
          </Link>
        </li>
        <li>
          <Link to="/" onClick={scrollToOrganisateure}>
            ORGANISATEUR
          </Link>
        </li>
        <li>
          <Link to="/gallerie"> GALLERIE </Link>
        </li>

        <li>
          <Link to="/evenemet"> ÉVÈNEMENT </Link>
        </li>
        <li>
          <Link to="/contact"> CONTACT </Link>
        </li>
        <li>
          <Link to="/blog"> BLOG </Link>
        </li>
        {props.isAuth.isAuthenticated ? (
          <li className="connexionBt">
            <Link to="/Profile">PROFILE</Link>
          </li>
        ) : (
          <li className="connexionBt">
            <Link to="/sign-in">CONNEXION</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth,
  };
};
export default connect(mapStateToProps)(SideDrawer);
