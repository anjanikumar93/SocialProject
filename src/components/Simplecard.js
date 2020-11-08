import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  spacecard: {
    width: 275,
    height: 300,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  article: {
    wordBreak: "break-all",
    textAlign: "left",
    fontSize: 15,
    cursor: "pointer",
  },
});

const Simplecard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.spacecard}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.eventData}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.flightNumber}
          </Typography>
          <Typography className={classes.detail} variant="body2" component="p">
            {props.eventdataUtc}
          </Typography>
        </CardContent>
        <CardActions className={classes.article}>
          <Link>{props.link}</Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Simplecard;
