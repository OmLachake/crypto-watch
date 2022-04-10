import React from "react";
import { AppContext } from "../../context/AppProvider";
import { NavButton } from "../../designs";

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => {
        return (
          <NavButton onClick={() => setPage(name)} active={page === name}>
            {name}
          </NavButton>
        );
      }}
    </AppContext.Consumer>
  );
}

export default ControlButton;
