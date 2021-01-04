import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import myCat from "./myCat.png";

import "./Message.css";

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container>
        <Grid
          item
          display="flex"
          direction={this.props.message.from === "user" ? "row-reverse" : "row"}
        >
          <Grid container display="flex" direction="column">
            <Box display="flex" direction="row" alignItems="center">
              <Tooltip title={this.props.message.from}>
                <Avatar
                  src={
                    this.props.message.from === "user"
                      ? myCat
                      : this.props.bot.avatar
                  }
                />
              </Tooltip>
              <Typography>{this.props.message.from}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography>{this.props.message.date.toLocaleString()}</Typography>
          </Grid>
          <Grid
            item
            xs
            zeroMinWidth
            className={
              this.props.message.from === "user"
                ? "message user"
                : "message bot"
            }
          >
            <Typography>{this.props.message.content}</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Message;
