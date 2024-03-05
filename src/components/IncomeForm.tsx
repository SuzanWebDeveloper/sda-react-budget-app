import React, { useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

type IncomeType = {
  id: string;
  source: string;
  amount: number;
  date: string;
};

const IncomeForm = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [incomes, setIncomes] = useState<IncomeType[]>([]);

  const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSource(event.target.value);
  };
  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const income = {
      id: uuidv4(),
      source: source,
      amount: amount,
      date: date,
    };

    setIncomes((prevIncomes) => {
      return [...prevIncomes, income];
    });

    //reset thhee state
    setSource('');
    setAmount(0);
    setDate('');
  };

  return (
    <div className="incomeForm-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="pair">
          <label htmlFor="source">Income source</label>
          <input
            type="text"
            placeholder="Salary"
            name="source"
            id="source"
            value={source}
            onChange={handleSourceChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of income</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date of incom</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button>Add income</button>
      </form>
      {/* list the data from array */}
      <ul>
        {incomes.map((income: IncomeType) => {
          return (
            <li key={income.id}>
              {income.source}: {income.amount}EUR on {income.date}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncomeForm;
