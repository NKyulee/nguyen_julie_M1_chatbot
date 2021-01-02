import React, { Component } from "react";

import { Grid, Paper, Typography } from "@material-ui/core";
import "./ChatContainer.css";

export class InfosContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={8} className="chatContainer">
        <Paper elevation={1} className="paper">
          <img
            id="imgForChatContainer"
            className={this.props.currentBot.class}
            alt={this.props.currentBot.class}
            src={this.props.currentBot.avatar}
          />
          <Typography variant="h5" align="center">
            {`Vous parlez avec ${this.props.currentBot.name}`}
          </Typography>
          <Typography variant="overline" align="center">
            {this.props.currentBot.description}
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

export default InfosContact;
