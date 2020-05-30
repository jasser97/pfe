import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Bkt from "../Back-to-top/BackTop";
// core components
import Navbar from "./components@material/Navbars/Navbar.js";
// import Footer from "./components@material/Footer/Footer.js";
import Sidebar from "./components@material/Sidebar/Sidebar.js";
// import FixedPlugin from "./components@material/FixedPlugin/FixedPlugin.js";
import routes from "./routes.js";
import styles from "./assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "./assets/img/sidebar-2.jpg";
import logo from "./assets/img/reactlogo.png";

//redux
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// let ps;
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/Profile") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/Profile" to="/Profile/user" />
  </Switch>
);

const useStyles = makeStyles(styles);
const Profile = ({ ...rest }) => {
  // styles

  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />

      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </div>
      <Bkt />
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Profile);
