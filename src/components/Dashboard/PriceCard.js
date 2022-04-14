import React from "react";
import { CoinHeaderGrid, color3, PriceTile } from "../../designs";

function PriceCard({ price, index, currentFavorite, setCurrentFavorite }) {
  const name = price.name;
  const value = price.inr.PRICE;
  const change = price.inr.CHANGEDAY;
  return index < 5 ? (
    <PriceTile
      selectable
      currentFavorite={currentFavorite}
      onClick={() => setCurrentFavorite(name)}
    >
      <CoinHeaderGrid>
        <div>{name}</div>
        <div
          style={{
            justifySelf: "right",
            color:
              change > 0
                ? color3
                : change < 0
                ? "red"
                : change === 0
                ? "white"
                : "white",
          }}
        >
          {change &&
            change.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
        </div>
        <div style={{}}>
          ₹
          {value &&
            value.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
        </div>
      </CoinHeaderGrid>
    </PriceTile>
  ) : (
    <PriceTile
      selectable
      compact
      currentFavorite={currentFavorite}
      onClick={() => setCurrentFavorite(name)}
    >
      <div>{name}</div>
      <div>
        ₹
        {value &&
          value.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
      </div>
      <div
        style={{
          color:
            change > 0
              ? color3
              : change < 0
              ? "red"
              : change === 0
              ? "white"
              : "white",
        }}
      >
        {change &&
          change.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
      </div>
    </PriceTile>
  );
}

export default PriceCard;
