import React, { Component } from "react";

import { Grid, Paper, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import InfosContact from "./InfosContact";
import MessagesContainer from "../MessagesContainer";
import "./ChatContainer.css";

export class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  inputToMessage() {
    const message = {
      from: "user",
      to: this.props.currentBot.name,
      date: new Date(),
      content: this.state.input,
    };
    this.props.addMessage(this.props.currentBot.id, message);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.input === "") {
      return;
    }
    this.inputToMessage();
    this.setState({ input: "" });
  }

  render() {
    return (
      <Grid item xs={10} className="chatContainer">
        <Paper elevation={1} className="paper">
          <InfosContact currentBot={this.props.currentBot} />
          <MessagesContainer messages={this.props.currentBot.messages} />

          <form onSubmit={this.handleSubmit}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Miaou ?"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              type="submit"
              value="Submit"
            >
              Envoyer
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default ChatContainer;
