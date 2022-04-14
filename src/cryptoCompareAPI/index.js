const cc = require("cryptocompare");
cc.setApiKey(
  "ae4f5d020a615ccb643cff84be548765d48bfcf422f73db2f2ed733d31612e60"
);

export const fetchCoins = async () => {
  let coinsList = (await cc.coinList()).Data;
  return coinsList;
};

export const fetchPrices = async (favorites) => {
  try {
    return favorites && (await cc.priceFull(favorites, ["USD", "INR"]));
  } catch (error) {
    console.warn("Error While Fetching Prices : ", error);
    return [];
  }
};
