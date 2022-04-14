import moment from "moment";

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
    return favorites && (await cc.priceFull(favorites, ["INR"]));
  } catch (error) {
    console.warn("Error While Fetching Prices : ", error);
    return [];
  }
};

export const fetchHistorical = async (coin, chartInterval) => {
  let units =
    chartInterval === "months" ? 24 : chartInterval === "days" ? 30 : 10;
  try {
    const data = [];
    for (units; units > 0; units--) {
      const date = moment()
        .subtract({ [chartInterval]: units })
        .toDate();
      const price = await cc.priceHistorical(coin, ["INR"], date);
      data.push([date.valueOf(), price.INR]);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.warn("Error While Fetching Historical Data : ", error);
    return [];
  }
};
