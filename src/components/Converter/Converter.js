import React, { useState, useEffect } from "react";
import { CurrencyRow } from "./CurrencyRow";

import "./Converter.css";

export const Converter = ({ coins, loaded, from, to }) => {
  const fromCurrency = from;
  const toCurrency = to;
  const exchangeRate = coins.find((x) => x.symbol === from).current_price;
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className="converter">
      <h1>Конвертер валют</h1>
      <CurrencyRow
        selected={fromCurrency}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <p className="eq">=</p>
      <CurrencyRow
        selected={toCurrency}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />
    </div>
  );
};
