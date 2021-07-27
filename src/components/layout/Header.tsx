import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem",
    display: "flex",
  },
});

type HeaderProps = {
  children: React.ReactNode;
};

export default function Container(props: HeaderProps) {
  const classes = useStyles();
  return <header className={classes.root}>{props.children}</header>;
}
