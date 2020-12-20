import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: "right",
  },
  selectControl: {
    minWidth: 160,
  },
  episodesHeader: {
    maxWidth: "100%",
    padding: "35px 0px",
  },
}));

const EpisodeSelectorHeader = () => {
  const classes = useStyles();

  const [selectState, setSelectState] = useState({
    episode: "",
    name: "Episode 1",
  });

  const handleSelectOnChange = (event) => {
    const name = event.target.name;
    setSelectState({
      ...selectState,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.episodesHeader}>
      <Typography variant="h4" component="animateMotion">
        Episodes
      </Typography>

      <FormControl
        style={{ float: "right" }}
        variant="outlined"
        className={classes.formControl}
      >
        <Select
          native
          value={selectState.episode}
          onChange={handleSelectOnChange}
          inputProps={{
            name: "episode",
          }}
        >
          <option value="">Episode 1</option>
          <option value={10}>Episode 2</option>
          <option value={20}>Episode 3</option>
          <option value={30}>Episode 4</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default EpisodeSelectorHeader;
