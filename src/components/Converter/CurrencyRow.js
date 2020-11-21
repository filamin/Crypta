import React from "react";

export const CurrencyRow = (props) => {
  const { selected, amount, onChangeAmount } = props;

  return (
    <div className="cur-row">
      <input
        className="cur-input"
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <p className="symbol">{selected.toUpperCase()}</p>
    </div>
  );
};
