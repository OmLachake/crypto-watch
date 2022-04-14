import React from "react";
import { AppContext } from "../../context/AppProvider";
import { Bar, Logo } from "../../designs";
import ControlButton from "./ControlButton";

function AppBar() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Logo>CRYPTOWATCH</Logo>
            <Bar>
              <li style={{ pointerEvents: firstVisit ? "none" : "all" }}>
                <ControlButton name="my dashboard" />
              </li>
              <li>
                <ControlButton name="settings" />
              </li>
            </Bar>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default AppBar;
