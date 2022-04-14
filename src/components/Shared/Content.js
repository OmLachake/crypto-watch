import React from "react";
import { AppContext } from "../../context/AppProvider";

function Content({ children }) {
  return (
    <AppContext.Consumer>
      {({ isCoinsLoading, firstVisit, isPriceLoading }) => {
        if (isCoinsLoading) return <div>Loading Coins...</div>;
        if (!firstVisit && isPriceLoading) return <div>Loading Prices...</div>;
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
}

export default Content;
