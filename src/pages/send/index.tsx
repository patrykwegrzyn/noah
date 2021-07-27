import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

import PriceBox from "../../components/PriceBox";
import KeyPad from "../../components/KeyPad";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});

function Send() {
  const classes = useStyles();
  const [num, setNum] = useState<number>(0);
  return (
    <div className={classes.container}>
      <PriceBox value={num} currency="USD" />
      <KeyPad onChange={(n) => setNum(n)} />
    </div>
  );
}

export default withRouter(Send);
