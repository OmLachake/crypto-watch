import React, { Component } from "react";
import { fetchCoins } from "../cryptoCompareAPI";

export const AppContext = React.createContext();
export class AppProvider extends Component {
  state = {
    page: "my dashboard",
    ...this.getSavedSettings(),
  };

  componentDidMount = () => {
    const coins = fetchCoins();
    this.setState({ coinsList: coins });
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

    return {
      page: "my dashboard",
    };
  }

  setFavorites = () => {
    this.setState({ firstVisit: false, page: "my dashboard" });
    localStorage.setItem(
      "cryptoWatch",
      JSON.stringify({
        test: "Hello",
      })
    );
    console.log("Confirmed Favorites");
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setPage: this.setPage,
          confirmFavorites: this.setFavorites,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
