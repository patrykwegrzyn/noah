const coins = [
  {
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    name: "Bitcoin",
    symbol: "BTC",
    price: 34507.32,
    change: "+1.28%",
    balance: 1.1,
    color: "hsl(33, 93%, 54%)",
  },
  {
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    name: "Etherum",
    symbol: "ETH",
    price: 2158.83,
    change: "-0.49%",
    balance: 21.1,
    color: "hsl(33, 93%, 54%)",
  },
  {
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    name: "Tether",
    symbol: "USDT",
    price: 1,
    change: "-0.07%",
    balance: 2300,
    color: "hsl(33, 93%, 54%)",
  },
  {
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    name: "USD Coin",
    symbol: "USDC",
    price: 1,
    change: "-0.06%",
    balance: 1500,
    color: "hsl(33, 93%, 54%)",
  },
  {
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
    name: "Cardano",
    symbol: "ADA",
    price: 1.21,
    change: "-1.25%",
    balance: 10000,
    color: "hsl(33, 93%, 54%)",
  },
];

const data = coins.map((coin) => {
  const { name, symbol, price, balance, color, logo, change } = coin;
  return {
    id: symbol,
    logo,
    label: name,
    price,
    balance,
    value: balance * price,
    change,
    color,
  };
});

export default data;
