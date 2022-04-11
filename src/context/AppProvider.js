import _ from "lodash";
import React, { Component } from "react";
import { fetchCoins } from "../cryptoCompareAPI";

export const AppContext = React.createContext();
export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "my dashboard",
      favorites: ["BTC", "ETH"],
    };
  }

  componentDidMount = async () => {
    const coins = await fetchCoins();
    const favorites = this.getSavedSettings();
    this.setState({ coinsList: coins, favorites });
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
    let { favorites } = cryptoWatchData;
    return favorites;
  }

  setFavorites = () => {
    this.setState({ firstVisit: false, page: "my dashboard" });
    localStorage.setItem(
      "cryptoWatch",
      JSON.stringify({
        favorites: this.state.favorites,
      })
    );
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
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
