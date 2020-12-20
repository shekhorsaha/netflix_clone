import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  posterContainer: {
    height: 400,
    width: "100%",
    border: "2px solid red", //delete later
  },
}));

function GridTest() {
  const classes = useStyles();

  return (
    <div className={classes.posterContainer}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        css={{ maxWidth: 200, height: 200 }}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <div style={{ border: "2px solid blue" }}>asdsa</div>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-end"
        css={{ maxWidth: 200, height: 200 }}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12}>
            <div style={{ border: "2px solid blue" }}>dsadsadsadsadsadsa</div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GridTest;
