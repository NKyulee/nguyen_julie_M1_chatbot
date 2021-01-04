import React, { Component } from "react";
import { Grid, List, ListSubheader, Drawer } from "@material-ui/core";
import Bot from "./Bot";

import "./BotContainer.css";

export class BotContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item
        xs={2}
        style={{
          height: "calc(100vh - 75px)",
        }}
      >
        <List
          subheader={
            <ListSubheader component="div">Chats disponibles</ListSubheader>
          }
        >
          {this.props.bots.map((bot) => (
            <Bot
              bot={bot}
              setCurrentBot={this.props.setCurrentBot}
              key={bot.id}
            />
          ))}
        </List>
      </Grid>
    );
  }
}

export default BotContainer;
