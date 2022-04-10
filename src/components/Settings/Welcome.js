import React from "react";
import { AppContext } from "../../context/AppProvider";

function Welcome() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) => {
        return firstVisit ? (
          <h1 style={{ padding: "30px 0" }}>Welcome to CryptoWatch</h1>
        ) : null;
      }}
    </AppContext.Consumer>
  );
}

export default Welcome;
