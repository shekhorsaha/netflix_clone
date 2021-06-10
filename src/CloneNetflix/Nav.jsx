import { makeStyles } from "@material-ui/core";
import React from "react";
// import style from "./style.css";

const useStyle = makeStyles((theme) => ({
  navbarMain: {
    fontFamily: "Ubuntu",
    position: "sticky",
    height: "60px",
    backgroundColor: "black",
  },
  netflixLogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "60px",
    paddingLeft: "50px",
  },
  navRight: {
    position: "static",
    color: "white",
  },
  btnJoinNow: {
    /* border-radius: 5px; */
    border: "1px solid red",
    margin: "10px",
    padding: "8px 24px 8px 24px",
    fontSize: "13px",
    backgroundColor: "red",
    color: "white",
    textDecoration: "none",
  },
  btnSign: {
    border: "0.5px solid white",
    /* border-radius: 5px; */
    margin: "10px 50px 10px 6px",
    padding: "8px 20px 8px 20px",
    fontSize: "13px",
    backgroundColor: "black",
    color: "white",
  },
}));

const Nav = () => {
  const classes = useStyle();
  return (
    <div className={classes.navbarMain}>
      <div className={classes.netflixLogo}>
        <img
          src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
          alt="neflix_logo"
          height="auto"
        ></img>
        <div className={classes.navRight}>
          UNLIMITED TV SHOWS & MOVIES
          <button className={classes.btnJoinNow}>JOIN NOW</button>
          <button className={classes.btnSign}>SIGN IN</button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
