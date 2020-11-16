import Navbar from "./layout/Navbar";
import BotContainer from "./containers/BotContainer";
import ChatContainer from "./containers/ChatContainer";

import "./App.css";
import React, { Component } from "react";

import { Box, Grid } from "@material-ui/core";
import Homepage from "./layout/Homepage";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setCurrentBot = (bot) => {
    this.setState((state, props) => {
      return { currentBot: bot };
    });
  };

  render() {
    return (
      <Box>
        <Navbar />
        <Grid
          container
          style={{ marginTop: "75px", height: "calc(100vh - 75px)" }}
        >
          <BotContainer setCurrentBot={this.setCurrentBot} />
          {this.state.currentBot ? (
            <ChatContainer currentBot={this.state.currentBot} />
          ) : (
            <Homepage />
          )}
        </Grid>
      </Box>
    );
  }
}

export default App;
