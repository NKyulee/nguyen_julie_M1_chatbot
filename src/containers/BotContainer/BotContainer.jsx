import React, { Component } from "react";
import { Grid, List, ListSubheader, Drawer } from "@material-ui/core";
import Bot from "./Bot";

import Cat1 from "../../assets/Cat1.gif";
import Cat2 from "../../assets/Cat2.gif";
import Cat3 from "../../assets/Cat3.gif";

import "./BotContainer.css";

const catbot = [
  {
    id: "1",
    name: "ChatNiversaire",
    class: "ChatNiversaire",
    avatar: Cat1,
    description:
      "Miaou, je suis le ChatNiversaire ! J'aime particulierement souhaiter les anniversaires et vous offrir des cadeaux.",
  },
  {
    id: "2",
    name: "Chat-Lock Holmes",
    class: "ChatSherlockHolmes",
    avatar: Cat2,
    description:
      "Miaou, on m'appelle Chat-Lock Homes. Je résouds n'importe quelle addition que vous me donnerez !",
  },
  {
    id: "3",
    name: "Chat-Ry Potter",
    class: "ChatHarryPotter",
    avatar: Cat3,
    description: "Miaou, Je vole au dessus des rageux !",
  },
];

export class BotContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid
        item
        xs={2}
        style={{
          minWidth: "300px",
        }}
      >
        <List
          subheader={
            <ListSubheader component="div">Chats disponibles</ListSubheader>
          }
        >
          {catbot.map((bot) => (
            <Bot bot={bot} setCurrentBot={this.props.setCurrentBot} />
          ))}
        </List>
      </Grid>
    );
  }
}

export default BotContainer;
