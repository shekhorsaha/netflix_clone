import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";

const LinearProgressWithLabel = ({
  watchedTime,
  totalTime,
  ignoreTimeDisplay,
  lessWidth,
}) => {
  return (
    <Box display="flex" alignItems="center">
      {/* initial processbar only (without time showing) */}
      {ignoreTimeDisplay ? (
        <Box width="100%" mr={1}>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={(watchedTime / totalTime) * 100}
          />
        </Box>
      ) : null}

      {/* for hovered card */}
      {!ignoreTimeDisplay && !lessWidth ? (
        <Box width="67%" mr={1}>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={(watchedTime / totalTime) * 100}
          />
        </Box>
      ) : null}

      {/* for dialog processbar */}
      {lessWidth ? (
        <Box width="50%" mr={1}>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={(watchedTime / totalTime) * 100}
          />
        </Box>
      ) : null}

      {/* for written timing */}

      {!ignoreTimeDisplay ? (
        <Box minWidth={65}>
          <span style={{ color: "#FFF" }}>{`${Math.round(
            watchedTime
          )} of ${totalTime} m`}</span>
        </Box>
      ) : null}
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const ProgressWithLabel = ({
  watchTime,
  totalTime,
  ignoreTimeDisplay,
  lessWidth,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel
        watchedTime={watchTime}
        totalTime={totalTime}
        ignoreTimeDisplay={ignoreTimeDisplay}
        lessWidth={lessWidth}
      />
    </div>
  );
};

export default ProgressWithLabel;
