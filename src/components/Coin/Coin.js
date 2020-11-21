import React from "react";
import "./Coin.css";

export const Coin = ({
  name,
  image,
  symbol,
  price,
  marketcap,
  priceChange,
  volume,
}) => {
  if (priceChange && price) {
    priceChange = priceChange.toFixed(2);
    price = price.toFixed(2);
  }
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <div className="coin-names">
            <img src={image} alt="crypta" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin-precent red">{priceChange}%</p>
            ) : (
              <p className="coin-precent green">{priceChange}%</p>
            )}
            <p className="coin-marketcap">
              Рыночн. кап.: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
