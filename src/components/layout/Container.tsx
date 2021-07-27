import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",

    padding:
      "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
    overflowY: "scroll",
    width: "100%",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
  },
});

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}
