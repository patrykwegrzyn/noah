import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flex: "1 1 auto",
    WebkitOverflowScrolling: "touch",
    overflowScrolling: "touch",
    overflowY: "scroll",
  },
});

type MainProps = {
  children: React.ReactNode;
};

export default function Main(props: MainProps) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}
