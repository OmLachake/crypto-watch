import React from "react";
import { AppContext } from "../../context/AppProvider";
import { CoinTile } from "../../designs";

function CoinSpotlight() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinsList, isCoinsLoading }) => {
        if (isCoinsLoading) {
          return <div>Loading...</div>;
        }
        const coinDetails = coinsList[currentFavorite];
        return (
          <CoinTile>
            <h2 style={{ textAlign: "center" }}>{coinDetails?.CoinName}</h2>
            <img
              alt={coinDetails?.Symbol}
              src={"http://cryptocompare.com/" + coinDetails?.ImageUrl}
              style={{
                height: "200px",
                display: "block",
                margin: "auto",
                textAlign: "center",
              }}
            />
          </CoinTile>
        );
      }}
    </AppContext.Consumer>
  );
}

export default CoinSpotlight;
