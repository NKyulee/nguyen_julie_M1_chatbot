import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import "./Message.css";
import Avatar from "@material-ui/core/Avatar";

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box className="message">
        <Avatar src="/myCat.png" />
        <Typography>
          De {this.props.message.from} à {this.props.message.to}
        </Typography>
        <Typography>{this.props.message.content}</Typography>
        <Typography>{this.props.message.date.toLocaleString()}</Typography>
      </Box>
    );
  }
}

export default Message;
