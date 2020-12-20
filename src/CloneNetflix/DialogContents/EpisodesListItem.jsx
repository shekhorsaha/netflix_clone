import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Grid, Link, Typography } from "@material-ui/core";

import moviePosterBig from "../../assets/largeBackground.png";

/* import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider"; */

const useStyles = makeStyles((theme) => ({
  section1: {
    margin: theme.spacing(0, 1),
    float: "right",
  },
  accordionEpisodeListMedia: {
    margin: theme.spacing(1, 3),
    alignItems: "center",
    height: "70px",
    width: "120px",
    padding: "5px 15px",
  },

  rootListEpisodes: {
    width: "100%",
    maxWidth: "100%",

    background: "#181818",
    textDecorationColor: "white",
  },
}));

const EpisodesListItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootListEpisodes}>
      <Grid wrap="nowrap" spacing={1} container>
        <Grid item>
          <Grid item>
            <Typography gutterBottom variant="h5">
              1
            </Typography>
          </Grid>
          <Grid item>
            <CardMedia
              className={classes.accordionEpisodeListMedia}
              image={moviePosterBig}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={9}
          container
          // alignItems="center"
          className={classes.section1}
        >
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              Episode 1 Name
            </Typography>
          </Grid>

          <Grid item>
            <Typography gutterBottom variant="h7">
              45m
            </Typography>
          </Grid>
          <Typography color="textPrimary" variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            similique. Lorem ipsum dolor sit amet.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default EpisodesListItem;
