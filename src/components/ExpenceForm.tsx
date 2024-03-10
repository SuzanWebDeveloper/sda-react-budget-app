import React, { ChangeEvent, useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

type expenceType = {
  id: string;
  source: string;
  amount: number;
  date: string;
};

type TotalExpenceProps = { onGetTotalExpence: (amount: number) => void };

const ExpenceForm = (props: TotalExpenceProps) => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [expences, setExpences] = useState<expenceType[]>([]);

  const totalExpence = expences.reduce(
    (total, currentExpence) => total + currentExpence.amount,
    0
  );

  props.onGetTotalExpence(totalExpence);

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
    const expence = {
      id: uuidv4(),
      source: source,
      amount: amount,
      date: date,
    };
    setExpences((prevExpences) => {
      return [...prevExpences, expence];
    });

    setSource('');
    setAmount(0);
    setDate('');
  };

  const handleExpenceDelete = (id: string) => {
    const filteredIncomes = expences.filter((expence) => expence.id !== id);
    setExpences(filteredIncomes);
  };

  return (
    <div className="expenceForm-container">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Expence source</label>
          <input
            type="text"
            placeholder="Electricity bill"
            name="source"
            id="source"
            value={source}
            onChange={handleSourceChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of expence</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date of expence</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button>Add expence</button>
      </form>
      <ul>
        {/* display expences */}
        {expences.map((expence: expenceType) => {
          return (
            <li key={expence.id}>
              {expence.source}: {expence.amount}EUR on {expence.date}
              <button onClick={() => handleExpenceDelete(expence.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenceForm;
