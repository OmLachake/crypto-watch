import { forIn } from "lodash";
import React from "react";
import { AppContext } from "../../context/AppProvider";
import { PriceGrid } from "../../designs";
import PriceCard from "./PriceCard";

function Prices() {
  return (
    <AppContext.Consumer>
      {({ prices, currentFavorite, setCurrentFavorite, isPriceLoading }) => {
        if (isPriceLoading) {
          return <div>Loading...</div>;
        }
        const pricesData = [];
        const keys = Object.keys(prices);
        let index = 0;
        forIn(prices, (price) => {
          const item = {
            name: keys[index],
            usd: price.USD,
            inr: price.INR,
          };
          index += 1;
          pricesData.push(item);
        });
        return (
          <PriceGrid>
            {Object.keys(prices).map((price, index) => {
              return (
                <PriceCard
                  key={price}
                  price={pricesData[index]}
                  index={index}
                  currentFavorite={currentFavorite === pricesData[index].name}
                  setCurrentFavorite={setCurrentFavorite}
                />
              );
            })}
          </PriceGrid>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Prices;
