import React, { Component } from "react";

import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

import MessageContainer from "../MessageContainer/";
import "./ChatContainer.css";

export class ChatContainer extends Component {
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
          <MessageContainer />
          <FormControl container xs={12}>
            <TextField
              size="small"
              item
              xs={9}
              id="outlined-basic"
              variant="outlined"
              placeholder="Miaou ?"
            />
            <Button
              item
              xs={3}
              variant="contained"
              size="large"
              color="secondary"
              endIcon={<SendIcon />}
            >
              Envoyé
            </Button>
          </FormControl>
        </Paper>
      </Grid>
    );
  }
}

export default ChatContainer;
