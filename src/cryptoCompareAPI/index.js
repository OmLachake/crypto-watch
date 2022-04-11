const cc = require("cryptocompare");
cc.setApiKey(
  "ae4f5d020a615ccb643cff84be548765d48bfcf422f73db2f2ed733d31612e60"
);

export const fetchCoins = async () => {
  let coinsList = (await cc.coinList()).Data;
  return coinsList;
};
