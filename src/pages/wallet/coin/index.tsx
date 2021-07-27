import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CropFreeIcon from "@material-ui/icons/CropFree";
import SendIcon from "@material-ui/icons/Send";

import Grow from "@material-ui/core/Grow";
import { TransitionProps } from "@material-ui/core/transitions";

import { useHistory, useLocation, Link } from "react-router-dom";

import data from "../../../data/wallet";
import { Spacing } from "@material-ui/core/styles/createSpacing";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      background: "black",
      padding: 20,
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
    controlsWrapper: {
      padding: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    controlsCurrency: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
    },
    controlsIcons: {
      display: "flex",
      flexDirection: "row",
    },
    text: {
      paddingLeft: 20,
      paddingRight: 20,
      fontSize: 16,
    },
  })
);

export default function FullScreenDialog() {
  const theme = useTheme();
  console.log("multi theme", theme);
  let history = useHistory();
  const classes = useStyles();
  const [coin, setCoin] = useState<Coin | null>(null);
  const [open, setOpen] = useState(true);

  const { location } = history;
  const coinId = location.pathname.split("/").pop();

  useEffect(() => {
    const coin = data.find((c: Coin) => c.id === coinId);
    if (coin) {
      setCoin(coin);
    }
  }, []);

  if (!coin) return null;
  const { id, label, balance, value } = coin;

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };

  return (
    <div>
      <Dialog
        PaperProps={{
          style: {
            background:
              "linear-gradient(rgba(255,255,255,1) 0%, rgba(241,243,244,1) 13%)",
            boxShadow: "none",
            padding: 5,
          },
        }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar>
          <IconButton onClick={handleClose}>
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>

        <div className={classes.controlsWrapper}>
          <div className={classes.controlsCurrency}>
            <span className={classes.title}>
              {balance} {id}
            </span>
            <span
              style={{ fontSize: 18, fontWeight: "bold", color: "#14DB6C" }}
              className={classes.title}
            >
              {value}
            </span>
          </div>
          <div className={classes.controlsIcons}>
            <IconButton edge="start" color="inherit">
              <CropFreeIcon />
            </IconButton>
            <IconButton
              edge="start"
              component={Link}
              to={{
                pathname: `/wallet/${id}/send`,
              }}
              color="inherit"
            >
              <SendIcon />
            </IconButton>
          </div>
        </div>
        <div style={{ margin: 40 }}>
          <Button
            disableElevation
            variant="contained"
            size="large"
            fullWidth
            color="secondary"
          >
            Trade
          </Button>
        </div>
        <Typography variant="h6" className={classes.title}>
          Recurring buys
        </Typography>

        <p className={classes.text}>
          Unsure when to buy? . Try dolar sost averaging with a recurring buy.
        </p>
        <div style={{ margin: 40 }}>
          <Button
            style={{
              background: "#14DB6C",
              color: "white",
              borderColor: "#14DB6C",
            }}
            disableElevation
            variant="outlined"
            size="large"
            fullWidth
          >
            Set up recurring buy
          </Button>
        </div>
        <div>
          <Typography variant="h6" className={classes.title}>
            History
          </Typography>
        </div>
        <List style={{ maxHeight: 400, overflow: "auto" }}>
          <ListItem button>
            <ListItemText
              primary={`Sold ${label}`}
              secondary="Using USD Wallet"
            />
            <ListItemSecondaryAction>
              <ListItemText primary={`-0.3 ${id}`} secondary="-$12,12,0" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={`Sold ${label}`}
              secondary="Using USD Wallet"
            />
            <ListItemSecondaryAction>
              <ListItemText primary={`-0.3 ${id}`} secondary="-$12,12,0" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={`Sold ${label}`}
              secondary="Using USD Wallet"
            />
            <ListItemSecondaryAction>
              <ListItemText primary={`-0.3 ${id}`} secondary="-$12,12,0" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={`Sold ${label}`}
              secondary="Using USD Wallet"
            />
            <ListItemSecondaryAction>
              <ListItemText primary={`-0.3 ${id}`} secondary="-$12,12,0" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={`Sold ${label}`}
              secondary="Using USD Wallet"
            />
            <ListItemSecondaryAction>
              <ListItemText primary={`-0.3 ${id}`} secondary="-$12,12,0" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={`Sold ${label}`}
              secondary="Using USD Wallet"
            />
            <ListItemSecondaryAction>
              <ListItemText primary={`-0.3 ${id}`} secondary="-$12,12,0" />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
