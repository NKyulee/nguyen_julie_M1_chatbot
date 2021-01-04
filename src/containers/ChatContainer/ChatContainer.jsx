import React, { Component } from "react";

import { Grid, TextField, Button, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import InfosContact from "./InfosContact";
import MessagesContainer from "../MessagesContainer";
import "./ChatContainer.css";

export class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom = () => {
    if (this.myRef.current) {
      this.myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  catSayHello() {
    this.props.addMessage(
      this.props.currentBot.id,
      this.props.currentBot.answer(this.state.input)
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.input === "") {
      return;
    }

    this.inputToMessage();

    this.catSayHello();
    this.setState({ input: "" });

    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  }

  render() {
    return (
      <Grid item xs={10}>
        <Grid
          container
          direction="column"
          style={{ paddingRight: "1%", paddingLeft: "1%" }}
        >
          <InfosContact currentBot={this.props.currentBot} />
          <MessagesContainer
            messages={this.props.currentBot.messages}
            bot={this.props.currentBot}
          />
          <div ref={this.myRef} />
          <form style={{ marginTop: "1%" }} onSubmit={this.handleSubmit}>
            <Grid container direction="row">
              <Grid item xs={11}>
                <TextField
                  autoFocus
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Miaou ?"
                  value={this.state.input}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<SendIcon />}
                  type="submit"
                  value="Submit"
                  style={{ height: "100%" }}
                >
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default ChatContainer;
