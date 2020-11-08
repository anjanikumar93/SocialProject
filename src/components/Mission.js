import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Simplecard from "./Simplecard";

const useStyles = makeStyles({
  horizontal: {
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    padding: 5,
  },
  searchbar: {
    textAlign: "center",
    margin: 10,
  },
  searchfilter: {
    width: "50vw",
    height: "3em",
    borderRadius: 5,

    fontFamily: "Courier New",
  },
});

const Mission = () => {
  const classes = useStyles();
  const [hasError, setErrors] = useState(false);
  const [spacex, setSpacex] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.spacexdata.com/v3/history");
      res
        .json()
        .then((res) => setSpacex(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });
  //   console.log("spacex", spacex);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const filterTitle = spacex.filter((title1) => {
    return title1.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      {/* <span>data {JSON.stringify(hasError)}</span> */}
      <div className={classes.searchbar}>
        <input
          className={classes.searchfilter}
          type="text"
          placeholder="Search Card"
          onChange={searchHandler}
        />
      </div>

      <div className={classes.horizontal}>
        {filterTitle.map((value, index) => {
          return (
            <div>
              <Simplecard
                title={value["title"]}
                eventData={value["event_date_unix"]}
                flightNumber={value["flight_number"]}
                eventdataUtc={value["event_date_utc"]}
                link={value["links"].article}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mission;
