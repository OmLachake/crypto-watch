import _ from "lodash";
import React from "react";
import { AppContext } from "../../context/AppProvider";
import { CoinSearch, Input } from "../../designs";
import fuzzy from "fuzzy";

function Search() {
  const filterCoins = (e, setFilteredCoins, coinsList) => {
    e.preventDefault();
    let search = e.target.value;
    if (!search) setFilteredCoins(null);
    else handleFilter(search, coinsList, setFilteredCoins);
  };

  const handleFilter = _.debounce((inputValue, coinsList, setFilteredCoins) => {
    let coinSymbols = Object.keys(coinsList);
    let coinNames = coinSymbols.map((coin) => coinsList[coin].CoinName);
    let searchStrings = coinSymbols.concat(coinNames);

    let fuzzyResults = fuzzy
      .filter(inputValue, searchStrings, {})
      .map((result) => result.string);

    let filteredCoins = _.pickBy(coinsList, (result, coin) => {
      let CoinName = result.coinName;
      return (
        _.includes(fuzzyResults, coin) || _.includes(fuzzyResults, CoinName)
      );
    });

    setFilteredCoins(filteredCoins);
  }, 500);
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinsList }) => {
        return (
          <CoinSearch>
            <h2>Search Coins</h2>
            <Input
              onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinsList)}
            />
          </CoinSearch>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Search;
