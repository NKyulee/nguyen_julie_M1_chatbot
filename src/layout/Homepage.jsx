import React, { Component } from "react";

import { Grid, Typography, Paper } from "@material-ui/core";

import catLaptop from "../assets/catLaptop.gif";

import "./Homepage.css";

export class Homepage extends Component {
  render() {
    return (
      <Grid item xs={10} className="homePageChatBot">
        <Paper className="paperChatBot">
          <img className="catLaptop" alt="catLaptop" src={catLaptop} />
          <Typography variant="h5" align="center">
            Bienvenue sur le Cat Bot !
          </Typography>
          <Typography variant="h6" align="center">
            Essayer de parler avec nos chat, certains ont des curieuses choses à
            dire
          </Typography>
          <Typography align="center">
            Veuillez selectionner un chat et dites-lui "Miaou" pour commencer.
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

export default Homepage;
