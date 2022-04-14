import React from "react";
import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AppContext } from "../../context/AppProvider";
import { CoinTile, Select } from "../../designs";
import HighChartsTheme from "../../designs/HighChartsTheme";

const ChartConfig = (coin, data) => ({
  title: {
    text: "",
  },

  subtitle: {
    text: "Source: CryptoCompare",
  },

  yAxis: {
    title: {
      text: "Price",
    },
  },

  xAxis: {
    accessibility: {},
    type: "datetime",
    title: {
      text: "Date",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },

  series: [
    {
      name: coin,
      data: data,
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});
HighCharts.setOptions(HighChartsTheme);
function Chart() {
  return (
    <AppContext.Consumer>
      {({
        currentFavorite,
        historicalData,
        isCoinDataLoading,
        changeChart,
        chartInterval,
      }) => {
        return isCoinDataLoading ? (
          <div>Loading...</div>
        ) : (
          <CoinTile>
            <Select
              value={chartInterval || "years"}
              onChange={(e) => changeChart(e.target.value)}
            >
              <option value="days"> Days </option>
              <option value="months"> Months </option>
              <option value="years"> Years </option>
            </Select>
            <HighchartsReact
              highcharts={HighCharts}
              options={ChartConfig(currentFavorite, historicalData)}
            />
          </CoinTile>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Chart;
