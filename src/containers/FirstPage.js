import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../App.css";
import { Coin } from "../components/Coin/Coin";
import { Stock } from "../components/Stock/Stock";
import { Converter } from "../components/Converter/Converter";
import { FaArrowCircleRight } from "react-icons/fa";

export const FirstPage = () => {
  const [coins, setCoins] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setLoaded(true);
      })
      .catch((error) => alert(`${error}`));
  }, []);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coins) =>
    coins.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="coin-search">
        <div className="coin-menu">
          <h1 className="coin-text">CRYPTA</h1>
          <Link to="/secondpage">
            <FaArrowCircleRight />
          </Link>
        </div>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="Поиск..."
            onChange={handleChange}
          ></input>
        </form>
      </div>

      {loaded
        ? filteredCoins.map((coin) => {
            return (
              <div className="coin-all" key={coin.id}>
                {coin.id === "bitcoin" ? (
                  <div className="info-n-cur">
                    <Stock id={coin.id} />
                    <Converter
                      coins={coins}
                      loaded={loaded}
                      from={coin.symbol}
                      to="usd"
                    />
                  </div>
                ) : null}
                {coin.id === "ethereum" ? (
                  <div className="info-n-cur">
                    <Stock id={coin.id} />
                    <Converter
                      coins={coins}
                      loaded={loaded}
                      from={coin.symbol}
                      to="usd"
                    />
                  </div>
                ) : null}
                <Coin
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
