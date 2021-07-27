import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Chart from "./chart";

import data from "../../data/wallet";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  chartContainer: {
    display: "flex",
    flex: 1,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    flexDirection: "column",
  },
  title: {
    padding: 20,
  },
  listItemRootOverride: {
    textAlign: "right",
  },
});

function Wallet() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h4" component="div">
        Wallet
      </Typography>
      <div className={classes.chartContainer}>
        <Chart data={data} />
      </div>
      <List dense className={classes.root}>
        {data.map((coin: any): any => {
          const { id, label, price, value, change, balance, logo } = coin;
          const labelId = `checkbox-list-secondary-label-${id}`;

          return (
            <ListItem
              key={id}
              button
              component={Link}
              to={{
                pathname: `/wallet/${id}`,
                state: { ...coin },
              }}
            >
              <ListItemAvatar>
                <Avatar src={logo} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={label} secondary={id} />
              <ListItemSecondaryAction>
                <ListItemText
                  classes={{ root: classes.listItemRootOverride }}
                  id={labelId}
                  primary={`$${value}`}
                  secondary={`$${price}`}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default Wallet;
