import React from "react";
import Page from "../Shared/Page";
import Coins from "./Coins";
import ConfirmButton from "./ConfirmButton";
import Search from "./Search";
import Welcome from "./Welcome";

function Settings() {
  return (
    <Page name="settings">
      <Welcome />
      <Coins favoritesGrid />
      <ConfirmButton />
      <Search />
      <Coins />
    </Page>
  );
}

export default Settings;
