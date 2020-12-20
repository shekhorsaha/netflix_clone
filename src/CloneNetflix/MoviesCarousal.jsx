import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import MediaCard from "./MediaCard";

function MoviesCarousal({ movies }) {
  const [activeItemIndex, setActiveIndex] = useState(1);

  return (
    <div style={{ overflowY: "visible" }}>
      <ItemsCarousel
        style={{ overflowY: "visible" }}
        numberOfCards={5}
        gutter={20}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
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
        {movies.map((movie) => (
          <MediaCard movie={movie} />
        ))}
      </ItemsCarousel>
    </div>
  );
}

export default MoviesCarousal;
