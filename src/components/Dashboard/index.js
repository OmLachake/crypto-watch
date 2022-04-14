import React from "react";
import { ChartGrid } from "../../designs";
import Page from "../Shared/Page";
import Chart from "./Chart";
import CoinSpotlight from "./CoinSpotlight";
import Prices from "./Prices";
function Dashboard() {
  return (
    <Page name="my dashboard">
      <Prices />
      <ChartGrid>
        <CoinSpotlight />
        <Chart />
      </ChartGrid>
    </Page>
  );
}

export default Dashboard;
