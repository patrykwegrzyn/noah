import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginBottom: 50,
  },
  key: {
    fontSize: 28,
    fontWeight: 300,
  },
});

type KeyPadState = string[];

export const handleState = (key: string, state: KeyPadState, l: number = 7): KeyPadState => {
  switch (key) {
    case "<-":
      state.pop();
      break;
    case ".":
      const exist = state.filter((c) => c === key).length;
      if (!exist) {
        state = [...state, key];
      }
      break;
    default:
      if (state.length < l) {
        state = [...state, key];
      }
  }
  return state;
};

interface KeyPadProps {
  onChange: (value: number) => void;
}

function KeyPad({ onChange }: KeyPadProps) {
  const classes = useStyles();

  const [state, setState] = useState<KeyPadState>([]);

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "<-"];
  const rows = [...Array(Math.ceil(keys.length / 3))];
  const keyRows = rows.map((row, idx) => keys.slice(idx * 3, idx * 3 + 3));

  const keyPad = keyRows.map((row, i) => {
    const buttons = row.map((key: string, index: number) => {
      return (
        <Button
          className={classes.key}
          key={key}
          onClick={() => setState(handleState(key, state))}
        >
          {key}
        </Button>
      );
    });
    return (
      <div key={i} className={classes.row}>
        {buttons}
      </div>
    );
  });

  useEffect(() => {
    const value = state.length ? parseFloat(state.join("")) : 0;
    onChange(value);
  }, [state]);

  return <div className={classes.container}>{keyPad}</div>;
}

export default KeyPad;
