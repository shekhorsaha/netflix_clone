import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import MediaCard from "./MediaCard";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  carouselItems: {
    position: "relative",
  },
  mediaCardDiv: {
    margin: "5px solid red",
    position: "absolute",
  },
});

function MoviesCarousal({ movies, onMouseEnter, onClick }) {
  const [activeItemIndex, setActiveIndex] = useState(0);

  const classes = useStyle();

  return (
    <div>
      <ItemsCarousel
        numberOfCards={5}
        classes={{ itemWrapper: classes.carouselItems }}
        gutter={20}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        requestToChangeActive={setActiveIndex}
        activeItemIndex={activeItemIndex}
        activePosition={"center"}
        chevronWidth={24}
        rightChevron={
          <FontAwesomeIcon
            size="2x"
            style={{ color: "white" }}
            icon={faChevronRight}
          />
        }
        leftChevron={
          <FontAwesomeIcon
            size="2x"
            style={{ color: "white" }}
            icon={faChevronLeft}
          />
        }
        outsideChevron={false}
      >
        {movies.map((movie) => {
          return (
            <MediaCard
              movie={movie}
              className={classes.mediaCardDiv}
              onMouseEnter={onMouseEnter}
              key={movie.id}
              onClick={onClick}
            />
          );
        })}
      </ItemsCarousel>
    </div>
  );
}

export default MoviesCarousal;
