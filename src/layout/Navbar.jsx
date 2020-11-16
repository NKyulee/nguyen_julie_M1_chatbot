import React, { Component } from "react";

import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";

import catbox from "../assets/catbox.gif";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <CssBaseline />
        <AppBar position="fixed" className="appBar" color="secondary">
          <Toolbar>
            <img className="catbox" alt="catbox" src={catbox} />
            <Typography variant="h5" noWrap className="title">
              Cat Bot
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
