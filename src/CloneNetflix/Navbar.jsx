import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { BsCaretDown } from "react-icons/bs";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SearchBarBox from "./SearchBarBox";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles((theme) => {
  return {
    navbar: {
      display: "flex",
      position: "relative",
      height: "60px",
      backgroundColor: "black",
      opacity: 0.8,
    },
    navbarLogo: {
      height: "50px",
      cursor: "pointer",
      paddingLeft: "20px",
    },
    navbarItemsList: {
      display: "flex",
      listStyle: "none",
      padding: "0px 10px 5px 20px",
      fontSize: "1.3em",
    },
    navRightAvatarList: {
      display: "flex",
      listStyle: "none",
      fontSize: "1.3em",
      padding: "0px 15px 5px 10px",
    },
    navbarListForDvdToNotification: {
      display: "flex",
      listStyle: "none",
      paddingTop: "10px",
      float: "right",
    },
    navRightItems: {
      padding: "0px 12px",
    },
    showListItem: {
      cursor: "grab",
      color: "white",
    },
    navRightDiv: {
      display: "flex",
      paddingTop: "10px",
      float: "right",
    },

    dvd: {
      cursor: "pointer",
      color: "#FFF",
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
      margin: theme.spacing(2),
      cursor: "pointer",
    },
    avatarImage: {
      cursor: "pointer",
      maxHeight: "30px",
      maxWidth: "30px",
      margin: "auto",
    },
    bsCaretDown: {
      cursor: "pointer",
    },
    searchIcon: {
      cursor: "pointer",
      color: "white",
    },
    searchBarIni: {
      color: "white",
    },
  };
});

const Navbar = () => {
  const classes = useStyle();

  const [searchBar, setSearchBar] = useState(true);

  const handleOnClickSearch = (e) => {
    debugger;
    setSearchBar(!searchBar);
  };

  const handleOnMouseLeave = (e) => {
    setSearchBar(true);
  };

  return (
    <div className={classes.navbar}>
      <Router>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Grid container alignItems="center" justify="flex-start">
              <Grid item>
                <NavLink to="/browser">
                  <div>
                    <img
                      className={classes.navbarLogo}
                      src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
                      alt="Logo"
                    />
                  </div>
                </NavLink>
              </Grid>

              <Grid item>
                <ul className={classes.navbarItemsList}>
                  <li className={classes.showListItem}>
                    <Button>
                      <NavLink to="/browser">Home</NavLink>
                    </Button>
                  </li>

                  <li className={classes.showListItem}>
                    <Button>
                      <NavLink to="/tv_shows">TV Shows</NavLink>
                    </Button>
                  </li>

                  <li className={classes.showListItem}>
                    <Button>
                      <NavLink to="/movies">Movies</NavLink>
                    </Button>
                  </li>

                  <li className={classes.showListItems}>
                    <Button>
                      <NavLink to="/latest">Latest</NavLink>
                    </Button>
                  </li>

                  <li className={classes.showListItem}>
                    <Button>
                      <NavLink to="/mylist">My List</NavLink>
                    </Button>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" justify="flex-end">
              <Grid item>
                <div
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {searchBar ? (
                    <div className={classes.searchBarIni}>
                      <SearchIcon onClick={handleOnClickSearch} />
                    </div>
                  ) : (
                    <div
                      onBlur={handleOnMouseLeave}
                      className={classes.searchIcon}
                    >
                      <SearchBarBox autoFocus={!searchBar} />
                    </div>
                  )}
                </div>
              </Grid>

              <Grid item>
                <div
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <NavLink to="/notification">
                    <NotificationsIcon />
                  </NavLink>
                </div>
              </Grid>

              <Grid item>
                <div
                  style={{
                    paddingLeft: "15px",
                    paddingRight: "30px",
                    paddingBottom: "15px",
                  }}
                >
                  <NavLink to="/profile">
                    <Grid container alignItems="center" justify="flex-end">
                      <Grid item>
                        <div style={{ paddingRight: "10px" }}>
                          <Avatar
                            variant="square"
                            className={(classes.square, classes.avatarImage)}
                            src="netflixAvatar.png"
                          />
                        </div>
                      </Grid>
                      <Grid item>
                        <BsCaretDown color="white" />
                      </Grid>
                    </Grid>
                  </NavLink>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
};
export default Navbar;

/*
 

<Grid item>
                {searchBar ? (
                  <div className={classes.searchBarIni}>
                    <SearchIcon onClick={handleOnClickSearch} />
                  </div>
                ) : (
                  <div
                    onBlur={handleOnMouseLeave}
                    className={classes.searchIcon}
                  >
                    <SearchBarBox />
                  </div>
                )}
              </Grid>

              <Grid item>
                <NavLink to="/notification">
                  <NotificationsIcon />
                </NavLink>
              </Grid>

              <Grid item>
                <Avatar
                  variant="square"
                  className={(classes.square, classes.avatarImage)}
                  src="netflixAvatar.png"
                />

                <BsCaretDown color="white" />
              </Grid>
            </Grid>
            
 */
