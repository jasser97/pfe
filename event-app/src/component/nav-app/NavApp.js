import React, { Component } from "react";
import Navbar from "../Nvbar/Navbar";
import SideDrawer from "../SideDrawer/SideDarwer";
import BackDrop from "../Back-Drop/Back-Drop";

export default class NavApp extends Component {
  state = {
    SideDrawerOpen: false,
  };
  DrawerToogleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  BackDropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let BackDrop1;
    if (this.state.SideDrawerOpen) {
      BackDrop1 = <BackDrop click={this.BackDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Navbar
          navBg={this.props.navBg}
          DrawerClickHandler={this.DrawerToogleClickHandler}
          navEvent={this.props.navEvent}
          navContact={this.props.navContact}
          navBlog={this.props.navBlog}
          navActive={this.props.navActive}
        />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {BackDrop1}
      </div>
    );
  }
}
