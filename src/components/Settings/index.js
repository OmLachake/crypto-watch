import React from "react";
import Page from "../Shared/Page";
import ConfirmButton from "./ConfirmButton";
import Welcome from "./Welcome";

function Settings() {
  return (
    <Page name="settings">
      <Welcome />
      <ConfirmButton />
    </Page>
  );
}

export default Settings;
