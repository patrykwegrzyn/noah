import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    paddingBottom: "1rem",
    width: "100%",
  },
});

type FooterProps = {
  children: React.ReactNode;
};

export default function Container(props: FooterProps) {
  const classes = useStyles();
  return <footer className={classes.root}>{props.children}</footer>;
}
