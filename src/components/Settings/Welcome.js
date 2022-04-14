import React from "react";
import { AppContext } from "../../context/AppProvider";

function Welcome() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) => {
        return firstVisit ? (
          <div>
            <h1 style={{ padding: "30px 0" }}>Welcome to CryptoWatch</h1>
            <p> Please Select a coin to start with.</p>
          </div>
        ) : null;
      }}
    </AppContext.Consumer>
  );
}

export default Welcome;
