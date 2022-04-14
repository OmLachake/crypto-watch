import _ from "lodash";
import React, { Component } from "react";
import { fetchCoins, fetchHistorical, fetchPrices } from "../cryptoCompareAPI";

export const AppContext = React.createContext();
export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "my dashboard",
      favorites: [],
      prices: [],
      coinsList: [],
      isCoinsLoading: false,
      isPriceLoading: false,
      isCoinDataLoading: false,
      error: null,
      chartInterval: "",
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({
      isCoinsLoading: true,
      isPriceLoading: true,
      isCoinDataLoading: true,
    });
    const coins = await fetchCoins();
    const savedSettings = await this.getSavedSettings();
    const { favorites, currentFavorite, chartInterval } = savedSettings;
    const prices = await fetchPrices(favorites);
    const historicalData = await fetchHistorical(
      currentFavorite,
      chartInterval || "years"
    );
    this.setState({
      coinsList: coins,
      ...savedSettings,
      prices,
      historicalData,
      isCoinsLoading: false,
      isPriceLoading: false,
      isCoinDataLoading: false,
    });
  };

  setPage = (page) => this.setState({ page });
  getSavedSettings() {
    let cryptoWatchData = JSON.parse(localStorage.getItem("cryptoWatch"));
    if (!cryptoWatchData) {
      return {
        page: "settings",
        firstVisit: true,
      };
    }
    let { favorites, currentFavorite, chartInterval } = cryptoWatchData;
    return {
      favorites,
      page: "my dashboard",
      firstVisit: false,
      currentFavorite,
      chartInterval,
    };
  }

  setFavorites = async () => {
    this.setState({
      isPriceLoading: true,
      isCoinDataLoading: true,
      page: "my dashboard",
    });
    if (this.state.firstVisit) {
      this.setState({
        firstVisit: false,
        page: "my dashboard",
      });
    }
    let currentFavorite = this.state.currentFavorite;
    if (!this.state.favorites.includes(this.state.currentFavorite)) {
      currentFavorite = this.state.favorites[0];
    }
    localStorage.setItem(
      "cryptoWatch",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite,
      })
    );
    const prices = await fetchPrices(this.state.favorites);
    const historicalData = await fetchHistorical(
      this.state.currentFavorite || this.state.favorites[0],
      this.state.chartInterval || "years"
    );
    this.setState({
      prices,
      currentFavorite,
      historicalData,
      isPriceLoading: false,
      isCoinDataLoading: false,
    });
  };

  addFavorite = (coin) => {
    let favorites = [...this.state.favorites];
    if (!favorites.includes(coin) && favorites.length < 10) {
      favorites.push(coin);
      this.setState({ favorites });
    }
  };

  removeFavorite = (coin) => {
    const favorites = _.pull([...this.state.favorites], coin);
    this.setState({ favorites });
  };

  setCurrentFavorite = async (coin) => {
    this.setState({ isCoinDataLoading: true, currentFavorite: coin });
    const historicalData = await fetchHistorical(
      this.state.currentFavorite,
      this.state.chartInterval || "years"
    );
    this.setState({ historicalData, isCoinDataLoading: false });
    localStorage.setItem(
      "cryptoWatch",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoWatch")),
        currentFavorite: coin,
      })
    );
  };

  changeChart = async (value) => {
    this.setState({ isCoinDataLoading: true });
    if (!this.state.chartInterval) {
      this.setState({ chartInterval: value });
      const historicalData = await fetchHistorical(
        this.state.currentFavorite,
        value
      );
      localStorage.setItem(
        "cryptoWatch",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("cryptoWatch")),
          chartInterval: value,
        })
      );
      this.setState({ historicalData, isCoinDataLoading: false });
    } else {
      if (this.state.chartInterval === value) return;
      const historicalData = await fetchHistorical(
        this.state.currentFavorite,
        value
      );
      localStorage.setItem(
        "cryptoWatch",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("cryptoWatch")),
          chartInterval: value,
        })
      );
      this.setState({
        historicalData,
        isCoinDataLoading: false,
        chartInterval: value,
      });
    }
  };
  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addFavorite: this.addFavorite,
          removeFavorite: this.removeFavorite,
          setPage: this.setPage,
          confirmFavorites: this.setFavorites,
          setFilteredCoins: this.setFilteredCoins,
          setCurrentFavorite: this.setCurrentFavorite,
          changeChart: this.changeChart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
