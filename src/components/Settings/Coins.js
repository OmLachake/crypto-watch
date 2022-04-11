import React from "react";
import { AppContext } from "../../context/AppProvider";
import { CoinsGrid } from "../../designs";
import CoinCard from "./CoinCard";

function Coins({ favoritesGrid }) {
  return (
    <AppContext.Consumer>
      {({ coinsList, favorites, filteredCoins }) => {
        return (
          <CoinsGrid>
            {favoritesGrid
              ? favorites.map((coin) => {
                  return <CoinCard key={coin} favorite coin={coin} />;
                })
              : (
                  (filteredCoins && Object.keys(filteredCoins)) ||
                  Object.keys(coinsList).slice(0, 100)
                ).map((coin) => {
                  return <CoinCard key={coin} selectable coin={coin} />;
                })}
          </CoinsGrid>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Coins;
