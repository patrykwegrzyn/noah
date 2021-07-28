import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    flexDirection: "column",
  },
  wrapper: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flex: 1,
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "center",
  },
  big: {
    fontWeight: "bold",
  },
  small: {
    color: "#838587",
    fontWeight: "bold",
  },
  apy: {
    width: "100%",
    marginTop: 25,
    display: "flex",
    flex: 1,
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  apyBox: {
    fontSize: "0.9rem",
    background: "#7034FF",
    color: "white",
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 8,
  },
  apyPercent: {
    fontSize: "1.15rem",
    color: "#41BD34",
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },
});

function Balance() {
  const classes = useStyles();
  const [smallBal, setSmallBal] = useState(49532);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSmallBal(smallBal + 2);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className={classes.container}>
      <Typography variant="h4" id="tableTitle" component="div">
        Balance
      </Typography>
      <div className={classes.wrapper}>
        <Typography className={classes.big} variant="h3" component="div">
          $3,919.90
        </Typography>
        <Typography className={classes.small} variant="h5" component="div">
          {smallBal}
        </Typography>
      </div>
      <div className={classes.apy}>
        <Typography className={classes.apyBox} component="div">
          10% APY
        </Typography>
        <Typography className={classes.apyPercent} component="div">
          +7.678%
        </Typography>
      </div>
    </div>
  );
}

export default Balance;
