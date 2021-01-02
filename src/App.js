import Navbar from "./layout/Navbar";
import BotContainer from "./containers/BotContainer";
import ChatContainer from "./containers/ChatContainer";

import "./App.css";
import React, { Component } from "react";

import { Box, Grid } from "@material-ui/core";
import Homepage from "./layout/Homepage";

import Cat1 from "./assets/Cat1.gif";
import Cat2 from "./assets/Cat2.gif";
import Cat3 from "./assets/Cat3.gif";

const catbot = [
  {
    id: "0",
    name: "ChatNiversaire",
    class: "ChatNiversaire",
    avatar: Cat1,
    description:
      "Miaou, je suis le ChatNiversaire ! J'aime particulierement souhaiter les anniversaires et offrir des cadeaux.",
    messages: [],
  },
  {
    id: "1",
    name: "Chat-Lock Holmes",
    class: "ChatSherlockHolmes",
    avatar: Cat2,
    description:
      "Miaou, on m'appelle Chat-Lock Homes. Élémentaire mon cher Chatson.",
    messages: [],
  },
  {
    id: "2",
    name: "ChatGicien",
    class: "ChatGicien",
    avatar: Cat3,
    description: "Miaou, Cadabra !",
    messages: [],
  },
];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bots: catbot };

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
