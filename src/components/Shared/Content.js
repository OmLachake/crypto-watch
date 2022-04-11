import React from "react";
import { AppContext } from "../../context/AppProvider";

function Content({ children }) {
  return (
    <AppContext.Consumer>
      {({ coinsList }) => {
        if (!coinsList) return <div>Loading Coins</div>;
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
}

export default Content;
