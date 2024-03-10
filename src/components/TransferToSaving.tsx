import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

type TransfertoSavingProps = {
  OnGetSavingAmount: (amount: number) => void;
  totalIncomeAmount: number;
  totalExpenceAmount: number;
  savingAmount: number;
};

const TransferToSaving = (props: TransfertoSavingProps) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const amount = Number(event.target.value);
    amount > 0 ? setAmount(amount) : toast.error("amout can't be negative");
  };

  const balance =
    props.totalIncomeAmount - props.totalExpenceAmount - props.savingAmount;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    amount == 0
      ? toast.error('please enter amount')
      : amount <= balance
      ? props.OnGetSavingAmount(amount)
      : toast.error('amount is greater than balance');

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
