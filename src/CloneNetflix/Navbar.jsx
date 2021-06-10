import { Button, Grid, makeStyles } from "@material-ui/core";
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
import IconButton from "@material-ui/core/IconButton";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SearchBarBox from "./SearchBarBox";

const useStyle = makeStyles((theme) => {
  return {
    navbar: {
      display: "flex",
      position: "static",
      height: "60px",
      backgroundColor: "black",
    },
    navbarLogo: {
      width: "150px",
      height: "50px",
      cursor: "pointer",
      paddingLeft: "20px",
      // float: "left",
    },
    navbarList: {
      display: "flex",
      listStyle: "none",
      padding: "0px",
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
      paddingTop: "5px",
      fontSize: "1.2em",
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
    searchIcon: {
      cursor: "pointer",
      color: "white",
      paddingTop: "15px",
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
    bsCaretDown: {
      padding: "8px 0px 0px 5px",
      cursor: "pointer",
    },
    searchBar: {
      paddingTop: "20px",
    },
  };
});

const SearchBar = ({ searchText, setSearchText }) => {
  const BarStyling = {
    width: "80%",
    background: "#181818",
    border: "1px #D9D9D9",
    paddingTop: "5px",

    // float: "left",
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
        <Grid container>
          <Grid item lg={2}>
            <NavLink to="/browser">
              <div>
                {/* <img
                  src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
                  alt="neflix_logo"
                  height="auto"
                ></img> */}
                <img
                  className={classes.navbarLogo}
                  src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
                ></img>
              </div>
            </NavLink>
          </Grid>

          <Grid item lg={4}>
            <ul className={classes.navbarList}>
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

          <Grid item lg={3}>
            {!searchBar ? (
              <div
                onClick={handleOnClickSearch}
                onMouseLeave={handleOnMouseLeave}
                className={classes.searchIcon}
              >
                <SearchBarBox />
              </div>
            ) : (
              <div className={classes.searchBar}>
                <SearchBar />
              </div>
            )}
          </Grid>
          <Grid item lg={2}>
            <ul className={classes.navbarListForDvdToNotification}>
              <li className={classes.navRightItems}>
                <NavLink to="/dvd">DVD</NavLink>
              </li>
              <li className={classes.navRightItems}>
                <NavLink to="/gifts">
                  <CardGiftcardIcon />
                </NavLink>
              </li>
              <li className={classes.navRightItems}>
                <NavLink
                  to="/notification"
                  // className={classes.notificationIcon}
                >
                  <NotificationsIcon />
                </NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item lg={1}>
            <ul className={classes.navRightAvatarList}>
              <li>
                <Avatar
                  variant="square"
                  className={(classes.square, classes.avatarImage)}
                  src="netflixAvatar.png"
                />
              </li>
              <li className={classes.bsCaretDown}>
                <BsCaretDown color="white" />
              </li>
            </ul>
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
