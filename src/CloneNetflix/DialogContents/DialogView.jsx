import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent, Link } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

import ContentsOnMedia from "./ContentsOnMedia";

const useStyles = makeStyles((theme) => ({
  rootLargeCard: {
    width: "100%",
    margin: "0px",
    padding: theme.spacing(3, 4),
    backgroundColor: "#181818",
    color: "#FFF",
  },

  dialogViewMainDiv: {
    background: "#181818",
    color: "#FFF",
  },

  mediaBigScreen: {
    height: 400,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },

  button18Plus: {
    margin: "0px 5px",
    padding: "0px 0.4em",
    backgroundColor: "transparent",
    color: "#FFF",
    border: "1px solid #FFF",
    cursor: "pointer",
  },

  detailsKeyGreyText: {
    color: "#737373",
  },

  castNameLink: {
    color: "#FFF",
    cursor: "pointer",
    "&:hover": {
      color: "#FFF",
    },
  },
}));

const DialogView = ({ open, movie, onClickExit }) => {
  const classes = useStyles();

  if (!open) return null;

  return (
    <div className={classes.dialogViewMainDiv}>
      <Dialog
        open={open}
        maxWidth="md"
        scroll={"body"}
        transitionDuration={0}
        TransitionProps={{ timeout: { exit: 100, appear: 300, enter: 200 } }}
      >
        <CardMedia className={classes.mediaBigScreen} image={movie.posterWide}>
          <ContentsOnMedia movie={movie} onClickExit={onClickExit} />
        </CardMedia>

        <DialogContent className={classes.rootLargeCard}>
          <div>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={8}>
                <p>
                  {movie.year}
                  <button className={classes.button18Plus}>18+</button>

                  <Button>
                    <Icon
                      style={{ color: "#FFF" }}
                      name="audio description"
                      size="large"
                    />
                  </Button>
                </p>

                <p style={{ fontSize: "1.5em" }}>{movie.title}</p>
                <div style={{ color: "#FFF" }}>{movie.movieSummary}</div>
              </Grid>

              <Grid item xs={4}>
                <DisplayCastAndAlikeItems
                  categoryNames="Casts"
                  values={movie.casts}
                  showMore
                />
                <br />

                <DisplayCastAndAlikeItems
                  categoryNames="Genres"
                  values={movie.genres}
                  showMore
                />
                <br />

                <DisplayCastAndAlikeItems
                  categoryNames="This show is"
                  values={movie.thisShowIs}
                  showMore
                />
              </Grid>
            </Grid>
            <br />
            <br />
            <div>
              <p style={{ fontSize: "1.5em" }}>About {movie.title}</p>
              <DisplayCastAndAlikeItems
                categoryNames="Writer"
                values={movie.writer}
              />
              <br />
              <DisplayCastAndAlikeItems
                categoryNames="Casts"
                values={movie.casts}
              />
              <br />
              <DisplayCastAndAlikeItems
                categoryNames="Genres"
                values={movie.genres}
              />
              <br />
              <DisplayCastAndAlikeItems
                categoryNames="This show is"
                values={movie.thisShowIs}
              />
              <br />

              <p>
                <span className={classes.detailsKeyGreyText}>
                  <DisplayMaturityDetails
                    categoryNames="Maturity Rating"
                    values={movie.maturityRatingDetails}
                  />
                </span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogView;

function DisplayCastAndAlikeItems({ categoryNames, values, showMore }) {
  const classes = useStyles();

  return (
    <p>
      <span className={classes.detailsKeyGreyText}>{categoryNames}:</span>
      {values.map((value, index) => {
        if (index === values.length - 1) {
          if (showMore) {
            return (
              <span>
                <Link className={classes.castNameLink}> {value} </Link>,{" "}
                <Link className={classes.castNameLink}> more </Link>
              </span>
            );
          } else {
            return <Link className={classes.castNameLink}> {value} </Link>;
          }
        }
        return (
          <span>
            <Link className={classes.castNameLink}> {value} </Link>,{" "}
          </span>
        );
      })}
    </p>
  );
}

function DisplayMaturityDetails({ categoryNames, values, showMore }) {
  const classes = useStyles();

  return (
    <p>
      <span className={classes.detailsKeyGreyText}>{categoryNames}:</span>
      {values.map((value, index) => {
        if (index === values.length - 1) {
          if (showMore) {
            return (
              <span>
                {index === 0 ? (
                  <button className={classes.button18Plus}>18+</button>
                ) : (
                  <Link className={classes.castNameLink}> {value} </Link>
                )}
                {index !== 0 && <span style={{ color: "#FFF" }}>, </span>}
                <Link className={classes.castNameLink}> more </Link>
              </span>
            );
          } else {
            if (index === 0)
              return <button className={classes.button18Plus}>18+</button>;
            return <Link className={classes.castNameLink}> {value} </Link>;
          }
        }
        return (
          <span>
            {index === 0 ? (
              <button className={classes.button18Plus}>18+</button>
            ) : (
              <Link className={classes.castNameLink}> {value} </Link>
            )}
            {index !== 0 && <span style={{ color: "#FFF" }}>, </span>}
          </span>
        );
      })}
    </p>
  );
}
