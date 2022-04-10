import React from "react";
import { AppContext } from "../../context/AppProvider";
import { ActionButton } from "../../designs";

function ConfirmButton() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => {
        return (
          <div style={{ display: "grid", justifyContent: "center" }}>
            <ActionButton onClick={confirmFavorites}>
              Confirm Favorites
            </ActionButton>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default ConfirmButton;
