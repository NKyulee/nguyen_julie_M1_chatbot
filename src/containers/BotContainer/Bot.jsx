import React, { Component } from "react";

import ChatIcon from "@material-ui/icons/Chat";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import "./BotContainer.css";

export class Bot extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ListItem
          button
          key={this.props.bot.id}
          onClick={() => this.props.setCurrentBot(this.props.bot)}
        >
          <ListItemIcon>
            <img
              className={this.props.bot.class}
              alt={this.props.bot.class}
              src={this.props.bot.avatar}
            />
          </ListItemIcon>
          <ListItemText primary={this.props.bot.name} />
          <ChatIcon />
        </ListItem>
        <Divider />
      </div>
    );
  }
}

export default Bot;
