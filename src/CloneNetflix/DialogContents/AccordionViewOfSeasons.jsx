import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "semantic-ui-css/semantic.min.css";
import EpisodesListItem from "./EpisodesListItem";

const useStyles = makeStyles((theme) => ({
  rootAccordion: {
    width: "100%",
    background: "#181818",
    textDecorationColor: "white",
  },
  accordionDetails: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    background: "#181818",
  },

  rootListEpisodes: {
    width: "100%",
    maxWidth: "100%",
    background: "#181818",
    textDecorationColor: "white",
  },
}));

const AccordionViewOfSeasons = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootAccordion}>
      <Accordion>
        <AccordionDetails className={classes.accordionDetails}>
          <List
            component="animate"
            className={classes.rootListEpisodes}
            aria-label="Episode Folder"
          >
            <ListItem button>
              <EpisodesListItem />
            </ListItem>

            <Divider />

            <ListItem button divider>
              <ListItemText primary="Episosdes 2 Name" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Episosdes 3 Name" />
            </ListItem>

            <Divider light />

            <ListItem button>
              <ListItemText primary="Episosdes 4 Name" />
            </ListItem>

            <Divider light />
          </List>
        </AccordionDetails>
      </Accordion>
      <Divider light />
    </div>
  );
};

export default AccordionViewOfSeasons;
