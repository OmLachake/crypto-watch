import React from "react";
import { AppContext } from "../../context/AppProvider";

function Content({ children }) {
  return (
    <AppContext.Consumer>
      {({ coinsList, firstVisit, prices }) => {
        if (!coinsList) return <div>Loading Coins...</div>;
        if (!firstVisit && !prices) return <div>Loading Prices...</div>;
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
}

export default Content;
