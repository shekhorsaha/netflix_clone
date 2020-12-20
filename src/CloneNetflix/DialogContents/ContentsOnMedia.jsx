import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

import CancelIcon from "@material-ui/icons/Cancel";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ThumbDownAltRoundedIcon from "@material-ui/icons/ThumbDownAltRounded";

import posterShadow from "../../assets/nav-shadow.png";
import "semantic-ui-css/semantic.min.css";
import ProgressWithLabel from "../ProgressBar";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posterContainer: {
    height: 400,
    width: "100%",
    padding: theme.spacing(0, 1, 0, 4),
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(" + posterShadow + ")",
  },

  resumeButton: {
    // margin: theme.spacing(1),
  },

  loadingProgressDiv: {
    // padding: "10px",
  },
}));

let contentsOnMediaInfo = {
  playOrResume: "play",
  addToListTitle: "Add to My List",
  likeIconTitle: "I Like This",
  unlikeIconTitle: "Not For Me",
};

const ContentsOnMedia = ({ movie, onClickExit }) => {
  const classes = useStyles();

  const [clicked, setClicked] = useState(false);
  const [volumeOffClick, setVolumeOffClick] = useState(false);
  const [likeClick, setLikeClick] = useState(true);
  const [unLikeClick, setUnlikeClick] = useState(true);

  const handleAddToList = (e) => {
    if (!clicked) {
      setClicked(true);
      contentsOnMediaInfo.addToListTitle = "Add to My List";
    } else {
      setClicked(false);
      contentsOnMediaInfo.addToListTitle = "Remove from my list";
    }
  };

  const handleVolume = (e) => {
    if (!volumeOffClick) {
      setVolumeOffClick(true);
    } else setVolumeOffClick(false);
  };

  const handleLikeIcon = (e) => {
    if (!likeClick) {
      setLikeClick(true);
      contentsOnMediaInfo.likeIconTitle = "I Like This";
    } else {
      setLikeClick(false);
      contentsOnMediaInfo.likeIconTitle = "";
    }
  };

  const handleDislikeIcon = (e) => {
    if (!unLikeClick) {
      setUnlikeClick(true);
      contentsOnMediaInfo.unlikeIconTitle = "Not For Me";
    } else {
      setUnlikeClick(false);
      contentsOnMediaInfo.unlikeIconTitle = "";
    }
  };

  const handleClickCancel = (e) => {
    if (onClickExit) {
      onClickExit();
    } else {
      console.log(
        "onClickExit in not provided in the props in ContentsOnMedia component"
      );
    }
  };

  return (
    <div className={classes.posterContainer}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        css={{ width: "100%", height: 200 }}
      >
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
          <Grid item>
            {onClickExit ? (
              <IconButton
                onClick={handleClickCancel}
                size="medium"
                color="inherit"
                fontSize="large"
              >
                <CancelIcon />
              </IconButton>
            ) : null}
          </Grid>
        </Grid>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-end"
        css={{ width: "100%", height: 200 }}
      >
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <h1 style={{ color: "#FFF" }}>{movie.title}</h1>
          </Grid>

          <Grid item xs={6}>
            <div className={classes.loadingProgressDiv}>
              <ProgressWithLabel
                progressCounter={movie.progressCounter}
                totalTime={movie.totalMovieTime}
                lessWidth={true}
              />
            </div>
          </Grid>

          <Grid item xs={6}></Grid>

          <Grid item xs={6}>
            <div>
              <Button
                variant="contained"
                className={classes.resumeButton}
                endIcon={<PlayArrowIcon />}
              >
                <span style={{ fontWeight: "700", paddingTop: "3px" }}>
                  {contentsOnMediaInfo.playOrResume}
                </span>
              </Button>

              <Tooltip title={contentsOnMediaInfo.addToListTitle}>
                <IconButton onClick={handleAddToList}>
                  {clicked ? (
                    <AddIcon style={{ color: "#FFF" }} />
                  ) : (
                    <CheckIcon style={{ color: "#FFF" }} />
                  )}
                </IconButton>
              </Tooltip>

              <Tooltip title={contentsOnMediaInfo.likeIconTitle}>
                <IconButton onClick={handleLikeIcon}>
                  {likeClick ? (
                    <ThumbUpAltOutlinedIcon style={{ color: "#FFF" }} />
                  ) : (
                    <ThumbUpAltRoundedIcon style={{ color: "#FFF" }} />
                  )}
                </IconButton>
              </Tooltip>

              <Tooltip title={contentsOnMediaInfo.unlikeIconTitle}>
                <IconButton onClick={handleDislikeIcon}>
                  {unLikeClick ? (
                    <ThumbDownAltOutlinedIcon style={{ color: "#FFF" }} />
                  ) : (
                    <ThumbDownAltRoundedIcon style={{ color: "#FFF" }} />
                  )}
                </IconButton>
              </Tooltip>
            </div>
          </Grid>

          <Grid item xs={6}>
            <IconButton style={{ float: "right" }} onClick={handleVolume}>
              {volumeOffClick ? (
                <VolumeOffIcon style={{ color: "#FFF" }} />
              ) : (
                <VolumeUpOutlinedIcon style={{ color: "#FFF" }} />
              )}
            </IconButton>
          </Grid>
        </Grid>
        <div style={{ margin: "20px" }}> </div>
      </Box>
    </div>
  );
};
export default ContentsOnMedia;
