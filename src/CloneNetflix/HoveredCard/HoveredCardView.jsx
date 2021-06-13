import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ThumbDownAltRoundedIcon from "@material-ui/icons/ThumbDownAltRounded";

import DialogView from "../DialogContents/DialogView";
import ProgressWithLabel from "../ProgressBar";

const useStyles = makeStyles((theme) => ({
  rootMediumCard: {
    background: "#111111",
    transitionDelay: 2000,
    zIndex: 550000,
    width: "150%",
    height: "150%",
    position: "relative",
  },
  hoveredCardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    color: "white",
  },
  playIcon: { color: "white" },
  addIcon: { color: "white" },
  likeIcon: { color: "white" },
  unlikeIcon: { color: "white" },
  expandIcon: { color: "white" },
}));

const HoveredCardView = ({ movie, onMouseLeave, rect }) => {
  const classes = useStyles();

  const [clicked, setClicked] = useState(true);
  const [likeClick, setLikeClick] = useState(true);
  const [unLikeClick, setUnlikeClick] = useState(true);

  const [open, setOpen] = useState(false);

  const handleOnClickCard = (e) => {};
  const handleAddToList = (e) => {
    setClicked(false);
  };

  const handleLikeIcon = (e) => {
    if (!likeClick) {
      setLikeClick(true);
    } else setLikeClick(false);
  };
  const handleDislikeIcon = (e) => {
    if (!unLikeClick) {
      setUnlikeClick(true);
    } else setUnlikeClick(false);
  };

  const handleClickExpandIcon = (e) => {
    if (!open) {
      setOpen(true);
    } else setOpen(false);
  };

  return (
    <div
      style={{
        zIndex: 70000000,
        position: "absolute",
        top: rect.top,
        left: rect.left,
      }}
      onMouseLeave={onMouseLeave}
    >
      <Card className={classes.rootMediumCard} onClick={handleOnClickCard}>
        <CardMedia
          className={classes.hoveredCardMedia}
          image={movie.posterWide}
        />
        <CardActions style={{ zIndex: 999999 }}>
          <Grid container>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Tooltip title="play">
                    <IconButton className={classes.playIcon}>
                      <PlayArrowIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Add t My List">
                    <IconButton
                      className={classes.addIcon}
                      onClick={handleAddToList}
                    >
                      {clicked ? <AddIcon /> : <CheckIcon />}
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="I Like This">
                    <IconButton
                      className={classes.likeIcon}
                      onClick={handleLikeIcon}
                    >
                      {likeClick ? (
                        <ThumbUpAltOutlinedIcon />
                      ) : (
                        <ThumbUpAltRoundedIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Not For Me">
                    <IconButton
                      className={classes.unlikeIcon}
                      onClick={handleDislikeIcon}
                    >
                      {unLikeClick ? (
                        <ThumbDownAltOutlinedIcon />
                      ) : (
                        <ThumbDownAltRoundedIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>

            <Grid style={{ float: "right" }} item xs={2}>
              <Tooltip title="Episodes & info">
                <IconButton
                  className={classes.expandIcon}
                  onClick={handleClickExpandIcon}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </CardActions>

        <div style={{ paddingLeft: "25px" }}>
          <ProgressWithLabel
            watchTime={movie.watchTime}
            totalTime={movie.totalMovieTime}
          />
        </div>
      </Card>

      <DialogView
        open={open}
        movie={movie}
        onClickExit={(e) => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default HoveredCardView;
