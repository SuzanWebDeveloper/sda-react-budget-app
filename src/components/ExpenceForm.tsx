import React, { ChangeEvent, useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

type ExpenceType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type TotalExpenceProps = { onGetTotalExpence: (amount: number) => void };

const ExpenceForm = (props: TotalExpenceProps) => {
  const [expence, setExpence] = useState<ExpenceType>({
    source: '',
    amount: 0,
    date: '',
  });
  const [expences, setExpences] = useState<ExpenceType[]>([]);

  const totalExpence = expences.reduce(
    (total, currentExpence) => total + currentExpence.amount,
    0
  );

  props.onGetTotalExpence(totalExpence);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'amount') {
      const amount = Number(event.target.value);
      amount > 0
        ? setExpence((prevIncome) => {
            return { ...prevIncome, [event.target.name]: amount };
          })
        : toast.error("amount can't be negative");
    } else
      setExpence((prevIncome) => {
        return { ...prevIncome, [event.target.name]: event.target.value };
      });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (expence.amount == 0) toast.error('please enter amount');
    else {
      const newExpence = {
        id: uuidv4(),
        source: expence.source,
        amount: expence.amount,
        date: expence.date,
      };
      setExpences((prevExpences) => {
        return [...prevExpences, expence];
      });
      setExpence({
        source: '',
        amount: 0,
        date: '',
      });
    }
  };

  const handleExpenceDelete = (id: string) => {
    const filteredIncomes = expences.filter((expence) => expence.id !== id);
    setExpences(filteredIncomes);
  };

  return (
    <div className="expenceForm-container">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="expence-source">Expence source</label>
          <input
            type="text"
            placeholder="Electricity bill"
            name="source"
            id="expence-source"
            value={expence.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expence-amount">Amount of expence</label>
          <input
            type="number"
            name="amount"
            id="expence-amount"
            value={expence.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expence-date">Date of expence</label>
          <input
            type="date"
            name="date"
            id="expence-date"
            value={expence.date}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add expence</button>
      </form>
      <ul>
        {/* display expences */}
        {expences.map((expence: ExpenceType) => {
          return (
            <li key={expence.id}>
              {expence.source}: {expence.amount}EUR on {expence.date}
              <button onClick={() => handleExpenceDelete(expence.id!)}>
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
