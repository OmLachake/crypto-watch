import _ from "lodash";
import React, { Component } from "react";
import { fetchCoins, fetchPrices } from "../cryptoCompareAPI";

export const AppContext = React.createContext();
export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "my dashboard",
      favorites: [],
    };
  }

  componentDidMount = async () => {
    const coins = await fetchCoins();
    const savedSettings = await this.getSavedSettings();
    const { favorites } = savedSettings;
    const prices = await fetchPrices(favorites);
    this.setState({
      coinsList: coins,
      ...savedSettings,
      prices,
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
    let { favorites, currentFavorite } = cryptoWatchData;
    return {
      favorites,
      page: "my dashboard",
      firstVisit: false,
      currentFavorite,
    };
  }

  setFavorites = async () => {
    if (this.state.firstVisit) {
      this.setState({
        firstVisit: false,
        page: "my dashboard",
      });
    }
    const currentFavorite = this.state.favorites[0];
    localStorage.setItem(
      "cryptoWatch",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite,
      })
    );
    const prices = await fetchPrices(this.state.favorites);
    this.setState({ prices, page: "my dashboard", currentFavorite });
  };

  addFavorite = (coin) => {
    let favorites = [...this.state.favorites];
    if (!favorites.includes(coin)) {
      favorites.push(coin);
      this.setState({ favorites });
    }
  };

  removeFavorite = (coin) => {
    const favorites = _.pull([...this.state.favorites], coin);
    this.setState({ favorites });
  };

  setCurrentFavorite = (coin) => {
    this.setState({ currentFavorite: coin });

    localStorage.setItem(
      "cryptoWatch",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoWatch")),
        currentFavorite: coin,
      })
    );
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
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
