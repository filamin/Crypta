import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Fade from "react-reveal/Fade";

import "../App.css";
import "./SecondPage.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { PieChart, Pie } from "recharts";

export const SecondPage = () => {
  const [btcPrice, setBtcPrice] = useState();
  const [ethPrice, setEthPrice] = useState();
  const [btcAmount, setBtcAmount] = useState(0);
  const [ethAmount, setEthAmount] = useState(0);
  const [show, setShow] = useState(true);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setBtcPrice(res.data[0].current_price);
        setEthPrice(res.data[1].current_price);
        setLoaded(true);
      })
      .catch((error) => alert(`${error}`));
  }, []);
  let usdAmount = 0;
  let data = [];
  if (loaded) {
    usdAmount = (btcPrice * btcAmount + ethPrice * ethAmount).toFixed(2);
    data[0] = { name: "BTC", value: btcPrice * btcAmount };
    data[1] = { name: "ETH", value: ethPrice * ethAmount };
    console.log(data);
  }

  function handleBtcAmountChange(e) {
    setBtcAmount(e.target.value);
  }
  function handleEthAmountChange(e) {
    setEthAmount(e.target.value);
  }

  function handleClickTransition() {
    setShow(!show);
  }

  return (
    <div>
      <div className="coin-search">
        <div className="coin-menu">
          <h1 className="coin-text">CRYPTA</h1>
          <Link to="/firstpage">
            <FaArrowCircleLeft onClick={handleClickTransition} />
          </Link>
        </div>
      </div>
      <div className="my-cab-all">
        <div className="my-cab">
          <h1>Портфель валют</h1>
          <div className="cur-row">
            <input
              required
              min={0}
              className="cur-input"
              type="number"
              value={btcAmount}
              onChange={handleBtcAmountChange}
            />
            <p className="symbol">BTC</p>
          </div>
          <div className="cur-row">
            <input
              min="0"
              className="cur-input"
              type="number"
              value={ethAmount}
              onChange={handleEthAmountChange}
            />
            <p className="symbol">ETH</p>
          </div>
          <div className="cur-row">
            <input
              className="cur-input"
              type="number"
              value={usdAmount}
              readOnly
            />
            <p className="symbol">USD</p>
          </div>
        </div>
        <PieChart width={800} height={900}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={200}
            outerRadius={300}
            fill="#49ba92"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};
