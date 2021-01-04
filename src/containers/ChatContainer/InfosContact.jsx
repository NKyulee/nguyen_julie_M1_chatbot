import React, { Component } from "react";

import { Grid, Box, Typography } from "@material-ui/core";
import "./ChatContainer.css";

export class InfosContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12} className="chatContainer">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            id="imgForChatContainer"
            className={this.props.currentBot.class}
            alt={this.props.currentBot.class}
            src={this.props.currentBot.avatar}
          />
          <Typography variant="h5" align="center">
            {`Vous parlez avec ${this.props.currentBot.name}`}
          </Typography>
        </Box>
      </Grid>
    );
  }
}

export default InfosContact;
