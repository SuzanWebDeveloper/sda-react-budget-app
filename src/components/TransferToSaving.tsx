import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

type TransfertoSavingProps = {
  OnGetSavingAmount: (amount: number) => void;
  totalIncomeAmount: number;
  totalExpenceAmount: number;
  savingAmount: number;
};

const TransferToSaving = (props: TransfertoSavingProps) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const balance =
    props.totalIncomeAmount - props.totalExpenceAmount - props.savingAmount;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    balance >= amount
      ? props.OnGetSavingAmount(amount)
      : alert('amount greater than balance');

    setAmount(0);
  };

  return (
    <div className="trasnsfer-container">
      <p>Current Balance: {balance}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="source">Transfer to saving account</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={handleAmountChange}
          value={amount}
          required
        ></input>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default TransferToSaving;
