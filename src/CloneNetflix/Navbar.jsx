import { Button, Grid, makeStyles, Link } from "@material-ui/core";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

const useStyle = makeStyles((theme) => {
  return {
    navbar: {
      display: "block",
      padding: "7px 25px",
    },
    navbarLogo: {
      width: "98px",
      height: "40px",
      cursor: "pointer",
      float: "left",
    },
    navbarList: {
      display: "flex",
      listStyle: "none",
    },
    home: {
      cursor: "grab",
      color: "white",
    },
    tvShows: {
      cursor: "pointer",
      color: "white",
    },
    movies: {
      cursor: "pointer",
      color: "white",
    },
    latest: {
      cursor: "pointer",
      color: "white",
    },
    mylist: {
      cursor: "pointer",
      color: "white",
    },
    navRightDiv: {
      display: "flex",
    },
    searchIcon: {
      cursor: "pointer",
      color: "white",
      float: "right",
    },
    dvd: {
      cursor: "pointer",
      color: "#FFF",
    },
    giftmanuIconDiv: {
      cursor: "pointer",
    },
    giftmanuIcon: {
      cursor: "pointer",
      color: "white",
    },
    notificationIcon: {
      cursor: "pointer",
      color: "white",
    },
    dropdownButtonDiv: {
      cursor: "pointer",
      display: "flex",
    },
    square: {
      margin: theme.spacing(1),
      cursor: "pointer",
    },
    avatarImage: {
      cursor: "pointer",
      maxHeight: "30px",
    },
    dropdownIcon: {
      cursor: "pointer",
      color: "white",
      float: "right",
    },
  };
});

const SearchBar = ({ searchText, setSearchText }) => {
  const BarStyling = {
    width: "100%",
    background: "#181818",
    border: "none",

    float: "left",
    color: "#FFF",
  };

  return (
    <input
      style={BarStyling}
      key="random1"
      value={searchText}
      placeholder={"search movie, series"}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

const Navbar = () => {
  const classes = useStyle();

  const [searchBar, setSearchBar] = useState(false);

  const handleOnClickSearch = (e) => {
    if (!searchBar) setSearchBar(true);
  };

  const handleOnMouseLeave = (e) => {
    setSearchBar(false);
  };

  return (
    <div className={classes.navbar}>
      <Router>
        <Grid container xs={12} lg={12} style={{ padding: "5px 20px" }}>
          <Grid item xs={1} lg={1}>
            <NavLink to="/browser">
              <img
                className={classes.navbarLogo}
                src="Netflix-Logo.wine.png"
              ></img>
            </NavLink>
          </Grid>

          <Grid item xs={3.5} lg={3.5}>
            <ul className={classes.navbarList}>
              <li className={classes.home}>
                <Button>
                  <NavLink to="/browser">Home</NavLink>
                </Button>
              </li>

              <li className={classes.tvShows}>
                <Button>
                  <NavLink to="/tv_shows">TV Shows</NavLink>
                </Button>
              </li>

              <li className={classes.movies}>
                <Button>
                  <NavLink to="/movies">Movies</NavLink>
                </Button>
              </li>

              <li className={classes.latest}>
                <Button>
                  <NavLink to="/latest">Latest</NavLink>
                </Button>
              </li>

              <li className={classes.mylist}>
                <Button>
                  <NavLink to="/mylist">My List</NavLink>
                </Button>
              </li>
            </ul>
          </Grid>

          <Grid item xs={7.5} lg={7.5} className={classes.navRightDiv}>
            <Grid container xs={7.5}>
              <ul className={classes.navbarList}>
                <li className={classes.home}>
                  {!searchBar ? (
                    <Grid item xs={2.5} lg={2.5}>
                      <IconButton
                        onClick={handleOnClickSearch}
                        onMouseLeave={handleOnMouseLeave}
                        className={classes.searchIcon}
                      >
                        <SearchIcon color="white" />
                      </IconButton>
                    </Grid>
                  ) : (
                    <Grid item xs={2.5} lg={2.5}>
                      <SearchBar searchText />
                    </Grid>
                  )}
                </li>

                <li className={classes.tvShows}>
                  <Grid item xs={1.5} lg={1.5}>
                    <IconButton className={classes.dvd}>
                      <NavLink to="/dvd">DVD</NavLink>
                    </IconButton>
                  </Grid>
                </li>

                <li className={classes.movies}>
                  <Grid item xs={1} lg={1}>
                    <IconButton>
                      <NavLink to="/gifts" className={classes.giftmanuIcon}>
                        <CardGiftcardIcon />
                      </NavLink>
                    </IconButton>
                  </Grid>
                </li>

                <li className={classes.latest}>
                  <Grid item xs={1} lg={1}>
                    <IconButton>
                      <NavLink
                        to="/notification"
                        className={classes.notificationIcon}
                      >
                        <NotificationsIcon />
                      </NavLink>
                    </IconButton>
                  </Grid>
                </li>

                <li className={classes.mylist}>
                  <Grid
                    item
                    xs={1.5}
                    lg={1.5}
                    className={classes.dropdownButtonDiv}
                  >
                    <Avatar
                      variant="square"
                      className={(classes.square, classes.avatarImage)}
                      src="netflix.png"
                    />
                    <ArrowDropDownIcon className={classes.dropdownIcon} />
                  </Grid>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        <Switch>
          <Route exact path="/browser"></Route>
          <Route exact path="/tv_shows"></Route>
          <Route exact path="/movies"></Route>
          <Route exact path="/latest"></Route>
          <Route exact path="/mylist"></Route>
          <Route exact path="/dvd"></Route>
          <Route exact path="/gifts"></Route>
          <Route exact path="/notification"></Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Navbar;
