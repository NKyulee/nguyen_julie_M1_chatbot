import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Message from "./Message";

export class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid item xs={12} overflow="auto">
        <Box display="flex" flexDirection="column">
          {this.props.messages.map((message, index) => (
            <Box
              display="flex"
              alignSelf={message.from === "user" ? "end" : "start"}
            >
              <Message message={message} bot={this.props.bot} key={index} />
            </Box>
          ))}
        </Box>
      </Grid>
    );
  }
}

export default MessageContainer;
