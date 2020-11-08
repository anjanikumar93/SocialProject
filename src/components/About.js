import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <p className={classes.root}>My About</p>
    </>
  );
};

export default About;
