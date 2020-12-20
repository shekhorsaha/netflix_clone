import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import moviePoster from "../assets/small_background.jpg";
import { Box } from "@material-ui/core";

import DialogView from "./DialogContents/DialogView";
import HoveredCardView from "./HoveredCard/HoveredCardView";
import ProgressWithLabel from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  initialMedia: {
    backgroundImage: "url(" + moviePoster + ")",
    backgroundSize: "cover",
    height: "138px",
    padding: "4px 8px",
  },

  initialMediaDiv: {
    background: "#181818",
    zIndex: -1,
  },
  backgroundImageProgressBox: {
    padding: "5px 10px",
  },
  mediaCardDiv: {
    background: "#181818",
    position: "relative",
  },
}));

const MediaCard = ({ movie }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [runningId, setRunningId] = useState(0);
  let ref = useRef();

  const handleMouseEnterOnPoster = (e) => {
    setRunningId(movie.id);
  };

  const handleMouseLeaveOnPoster = (e) => {
    setRunningId(0);
  };

  const handleClickInitialPoster = (e) => {
    if (!open) {
      setOpen("true");
    } else setOpen("false");
  };

  const handleOnClickExit = (e) => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("MediaCard, side effect running");
    if (ref.current) {
      console.log(
        "ref =",
        ref.current.offsetWidth,
        ref.current.offsetTop,
        ref.current.offsetHeight
      );
    }
  }, [ref, ref.current]);

  return (
    <div
      ref={ref}
      className={classes.mediaCardDiv}
      style={{ overflowY: "visible" }}
      onMouseEnter={handleMouseEnterOnPoster}
    >
      {runningId ? (
        <HoveredCardView
          movie={movie}
          onMouseLeave={handleMouseLeaveOnPoster}
        />
      ) : (
        <div className={classes.initialMediaDiv}>
          <div
            onClick={handleClickInitialPoster}
            className={classes.initialMedia}
            style={{ backgroundImage: "url(" + movie.posterWide + ")" }}
          ></div>

          <Box className={classes.backgroundImageProgressBox}>
            <ProgressWithLabel
              ignoreTimeDisplay={true}
              progressCounter={movie.progressCounter}
              totalTime={movie.totalMovieTime}
            />
          </Box>
        </div>
      )}

      {open ? (
        <DialogView movie={movie} open={open} onClickExit={handleOnClickExit} />
      ) : null}
    </div>
  );
};
export default MediaCard;
