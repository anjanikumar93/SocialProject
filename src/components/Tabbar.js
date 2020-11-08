import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mission: {
    textDecoration: "none",
    color: "white",
  },
  rocket: {
    textDecoration: "none",
    color: "white",
  },
  stats: {
    textDecoration: "none",
    color: "white",
  },
  about: {
    textDecoration: "none",
    color: "white",
  },
}));

const Tabbar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink className={classes.mission} exact to="/">
                MISSIONS
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink className={classes.rocket} to="/rockets">
                ROCKETS
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink className={classes.stats} to="/stats">
                STATS
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink className={classes.about} to="/about">
                ABOUT
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      {/* <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <NavLink exact to="/">
              MISSIONS
            </NavLink>

            <NavLink to="/rockets">ROCKETS</NavLink>

            <NavLink to="/stats">STATS</NavLink>

            <NavLink to="/about">ABOUT</NavLink>
          </Tabs>
        </AppBar>
      </div> */}
    </>
  );
};

export default Tabbar;
