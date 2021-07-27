import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";

import PaymentIcon from "@material-ui/icons/Payment";

import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import Home from "./pages/home";
import Send from "./pages/send";
import Wallet from "./pages/wallet";
import WalletCoin from "./pages/wallet/coin";
import WalletCoinSend from "./pages/wallet/coin/send";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  header: { display: "flex", flex: 1, justifyContent: "space-between" },
  logo: { height: 30 },
  link: {
    color: "#black",
  },
  footer: { display: "flex", flex: 1, justifyContent: "space-between" },
  navigator: {
    background: "transparent",
    width: "100%",
  },
});

function TabNavigator() {
  const classes = useStyles();
  let location = useLocation();
  const history = useHistory();
  const [tab, setTab] = useState(location.pathname);
  const handleChange = (event: React.ChangeEvent<{}>, path: string) => {
    setTab(path);
    history.push(path);
  };
  return (
    <Footer>
      <div className={classes.footer}>
        <BottomNavigation
          value={tab}
          onChange={handleChange}
          className={classes.navigator}
        >
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<AccountBalanceWalletIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Send"
            value="/send"
            icon={<SendIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Wallet"
            value="/wallet"
            icon={<PaymentIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Menu"
            value="/menu"
            icon={<MenuIcon fontSize="large" />}
          />
        </BottomNavigation>
      </div>
    </Footer>
  );
}

function AppHeader() {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.header}>
        <img
          className={classes.logo}
          src="https://noahwebsite.cdn.prismic.io/noahwebsite/0eb66416-bea1-4488-8fc2-825a646e1a44_noah-horizontal.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=163&h=40"
        ></img>
        <Avatar src="https://material-ui.com/static/images/avatar/3.jpg" />
      </div>
    </Header>
  );
}

export default function App() {
  return (
    <Router>
      <Container>
        <AppHeader />
        <Main>
          <Switch>
            <Route path="/wallet/:coin/send">
              <WalletCoinSend />
            </Route>
            <Route path="/wallet/:coin">
              <WalletCoin />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/send">
              <Send />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
        <TabNavigator />
      </Container>
    </Router>
  );
}
