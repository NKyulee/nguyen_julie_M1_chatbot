import Navbar from "./layout/Navbar";
import BotContainer from "./containers/BotContainer";
import ChatContainer from "./containers/ChatContainer";

import "./App.css";
import React, { Component } from "react";

import { Box, Grid } from "@material-ui/core";
import Homepage from "./layout/Homepage";

import { catBots } from "./Bots/bots";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bots: catBots };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(currentBotId, message) {
    const newMessages = this.state.bots[currentBotId].messages;
    newMessages.push(message);
    this.setState({
      bots: this.state.bots.map((bot) =>
        bot.id === currentBotId ? { ...bot, messages: newMessages } : bot
      ),
    });
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
          <BotContainer
            setCurrentBot={this.setCurrentBot}
            bots={this.state.bots}
          />
          {this.state.currentBot ? (
            <ChatContainer
              currentBot={this.state.currentBot}
              addMessage={this.addMessage}
            />
          ) : (
            <Homepage />
          )}
        </Grid>
      </Box>
    );
  }
}

export default App;
