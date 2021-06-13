import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import moviePoster from "../assets/small_background.jpg";
import { Box } from "@material-ui/core";

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
  hoveredCard: {
    background: "#181818",
    position: "absolute",
    zIndex: 100000,
  },
}));

const MediaCard = ({ movie, onMouseEnter, onClick }) => {
  const classes = useStyles();
  const ref = useRef();

  const handleMouseEnterOnPoster = (e) => {
    if (onMouseEnter) {
      if (ref && ref.current) {
        var rect = ref.current.getBoundingClientRect();
        console.log(
          "movie ele track:",
          movie.id,
          rect.top,
          rect.right,
          rect.bottom,
          rect.left
        );
        onMouseEnter(movie.id, rect);
      }
    } else console.log("onMouseEnter props is not provided");
  };

  return (
    <div
      ref={ref}
      // onMouseEnter={handleMouseEnterOnPoster}
      onClick={() => onClick(movie)}
    >
      <div className={classes.initialMediaDiv}>
        <div
          className={classes.initialMedia}
          style={{ backgroundImage: "url(" + movie.posterWide + ")" }}
        ></div>

        <Box className={classes.backgroundImageProgressBox}>
          <ProgressWithLabel
            ignoreTimeDisplay={true}
            watchTime={movie.watchTime}
            totalTime={movie.totalMovieTime}
          />
        </Box>
      </div>
    </div>
  );
};
export default MediaCard;
