import React from "react";
import { Bar, Logo } from "../../designs";
import ControlButton from "./ControlButton";

function AppBar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo>CRYPTOWATCH</Logo>
      <Bar>
        <li>
          <ControlButton name="my dashboard" />
        </li>
        <li>
          <ControlButton name="settings" />
        </li>
      </Bar>
    </div>
  );
}

export default AppBar;
