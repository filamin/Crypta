import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const Stock = ({ id }) => {
  const [dateWithPrices, setDateWithPrices] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`
      )
      .then((res) => {
        setDateWithPrices(res.data.prices);
      })
      .catch((error) => alert(`${error}`));
  }, [setDateWithPrices]);

  const timeConverter = (unixTime) => {
    let date = new Date(unixTime - (unixTime % 1e3) / 1e3);
    let normalTime =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return normalTime;
  };

  const data = [];
  if (dateWithPrices) {
    dateWithPrices.forEach((item) => {
      data.push({
        name: timeConverter(item[0]),
        price: item[1].toFixed(2),
      });
    });
  }

  return (
    <div>
      <LineChart
        width={600}
        height={500}
        data={data}
        margin={{
          top: 50,
          right: 50,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="white" dy={10} />
        <YAxis stroke="white" />
        <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#ffffff"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};
