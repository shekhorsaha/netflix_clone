import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import movies from "./demoData";
import MoviesCarousal from "./MoviesCarousal";
import { CardMedia } from "@material-ui/core";
import ContentsOnMedia from "./DialogContents/ContentsOnMedia";

const useStyles = makeStyles((theme) => ({
  mainComponentDiv: {
    backgroundColor: "#181818",

    height: "2000px",
  },
  carousalHeading: {
    color: "white",
    paddingLeft: 39,
    paddingBottom: 10,
    fontSize: "1.3em",
  },
}));

function shuffleArray(array) {
  array = array.sort((a, b) => {
    let randomNumber = Math.random();
    let randomNumber2 = Math.random();
    let newNumber = randomNumber * randomNumber2;
    newNumber = Math.ceil(newNumber * 100000);
    if (newNumber % 2 === 0) return -1;
    else return 1;
  });

  array = array.map((ar) => {
    return { ...ar };
  });

  return [...array];
}

const MainComponent = () => {
  const classes = useStyles();
  const [movies1, setMovies1] = useState(movies);
  const [movies2, setMovies2] = useState(movies);
  const [movies3, setMovies3] = useState(movies);

  const [isDataLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setMovies1(shuffleArray(movies1));
    setMovies2(shuffleArray(movies2));
    setMovies3(shuffleArray(movies3));
    setIsLoaded(true);
  }, []);

  return (
    <div className={classes.mainComponentDiv}>
      <Navbar />
      <CardMedia
        className={classes.mediaBigScreen}
        image={movies[0].posterWide}
      >
        <ContentsOnMedia movie={movies[0]} />
      </CardMedia>

      {isDataLoaded && (
        <div>
          <div className={classes.carousalHeading}>Trending Now</div>
          <MoviesCarousal movies={movies1} />
          <div className={classes.carousalHeading}>Dramas</div>
          <MoviesCarousal movies={movies2} />
          <div className={classes.carousalHeading}>My List</div>
          <MoviesCarousal movies={movies3} />
          <div className={classes.carousalHeading}>Hindi Movies & TV</div>
          <MoviesCarousal movies={movies1} />
          <div className={classes.carousalHeading}>Popular on Netflix</div>
          <MoviesCarousal movies={movies2} />
          <div className={classes.carousalHeading}>New Releases</div>
          <MoviesCarousal movies={movies3} />
        </div>
      )}
    </div>
  );
};
export default MainComponent;
