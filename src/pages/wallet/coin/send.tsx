import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import CloseIcon from "@material-ui/icons/Close";

import Grow from "@material-ui/core/Grow";

import { TransitionProps } from "@material-ui/core/transitions";

import { useHistory } from "react-router-dom";

import data from "../../../data/wallet";

import PriceBox from "../../../components/PriceBox";
import KeyPad from "../../../components/KeyPad";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    dialog: {
      background: "black",
    },
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    listItemRootOverride: {
      textAlign: "right",
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} />;
});

interface Coin {
  balance: number;
  change: string;
  color: string;
  id: string;
  label: string;
  logo: string;
  price: number;
  value: number;
}

export default function FullScreenDialog() {
  let history = useHistory();

  const classes = useStyles();
  const [coin, setCoin] = useState<Coin | null>(null);
  const [open, setOpen] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const [num, setNum] = useState<number>(0);

  const { location } = history;
  const patharr = location.pathname.split("/");
  patharr.pop();
  const coinId = patharr.pop();

  useEffect(() => {
    const coin = data.find((c: Coin) => c.id === coinId);
    if (coin) {
      setCoin(coin);
    }
  }, []);

  if (!coin) return null;
  const { id, label, balance, value, price } = coin;

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };

  return (
    <div>
      <Dialog
        id="1"
        PaperProps={{
          style: {
            background:
              "linear-gradient(rgba(255,255,255,1) 0%, rgba(241,243,244,1) 13%)",
            boxShadow: "none",
          },
        }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="back"
          >
            <CloseIcon />
          </IconButton>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Enter amount</span>
            <span
              style={{ fontSize: 12, color: "#aaa" }}
            >{`${value} USD available`}</span>
          </div>
        </Toolbar>
        <div style={{ flexDirection: "row" }}>
          <div className={classes.container} style={{ height: 200 }}>
            <Button
              style={{ borderRadius: 90, height: 30 }}
              disableElevation
              size="small"
              color="primary"
              onClick={() => setNum(value)}
            >
              Max
            </Button>
            <PriceBox color="#7134FF" value={num} currency={currency} />
            {currency}
            <IconButton
              onClick={() => {
                setCurrency(currency === "USD"? id: "USD");
                const value = currency === "USD" ? num/price : num * price
                console.log("value", value, "currency",currency, "num",num, "price",price)
                setNum(value);
              }}
            >
              <SwapVertIcon />
            </IconButton>
          </div>
          <div className={classes.container} style={{ flex: 1 }}>
            <KeyPad onChange={(n) => setNum(n)} />
          </div>
          <div
            style={{ paddingLeft: 30, paddingRight: 30 }}
            className={classes.container}
          >
            <Button
              disableElevation
              variant="contained"
              size="large"
              fullWidth
              color="secondary"
              disabled={num === 0}
              style={{color: "white"}}
            >
              Continue
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
