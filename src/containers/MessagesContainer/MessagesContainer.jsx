import React, { Component } from "react";
import Box from "@material-ui/core/Box";

import Message from "./Message";

export class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box>
        {this.props.messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </Box>
    );
  }
}

export default MessageContainer;
