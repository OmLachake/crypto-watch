import React from "react";
import { AppContext } from "../../context/AppProvider";
import { CoinHeaderGrid, CoinSymbol, CoinTile } from "../../designs";

function CoinCard({ coin, favorite, selectable }) {
  const onCoinClick = (addCoin, removeCoin) => {
    return favorite ? removeCoin(coin) : selectable ? addCoin(coin) : null;
  };

  return (
    <AppContext.Consumer>
      {({ coinsList, addFavorite, removeFavorite }) => {
        let coinDetails = coinsList[coin];
        return (
          <CoinTile
            onClick={() => onCoinClick(addFavorite, removeFavorite)}
            favorite={favorite}
            selectable={selectable}
          >
            <CoinHeaderGrid>
              <div>{coinDetails.CoinName}</div>
              <CoinSymbol>{coinDetails.Symbol}</CoinSymbol>
            </CoinHeaderGrid>

            <img
              alt={coinDetails.Symbol}
              src={"http://cryptocompare.com/" + coinDetails.ImageUrl}
              style={{ height: "50px" }}
            />
          </CoinTile>
        );
      }}
    </AppContext.Consumer>
  );
}

export default CoinCard;
