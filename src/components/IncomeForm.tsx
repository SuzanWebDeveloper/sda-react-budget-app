import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

type IncomeType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type TotalIncomeProps = {
  onGetTotalIncome: (amount: number) => void;
};

const IncomeForm = (props: TotalIncomeProps) => {
  const [income, setIncome] = useState<IncomeType>({
    source: '',
    amount: 0,
    date: '',
  });

  const [incomes, setIncomes] = useState<IncomeType[]>([]);

  const totalIncome = incomes.reduce(
    (total, currentIncome) => total + currentIncome.amount,
    0
  );

  props.onGetTotalIncome(totalIncome);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'amount') {
      const amount = Number(event.target.value);
      amount > 0
        ? setIncome((prevIncome) => {
            return { ...prevIncome, [event.target.name]: amount };
          })
        : amount < 0 && toast.error("amount can't be negative");
    } else
      setIncome((prevIncome) => {
        return { ...prevIncome, [event.target.name]: event.target.value };
      });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (income.amount == 0) toast.error('please enter amount');
    else {
      const newIncome = {
        id: uuidv4(),
        source: income.source,
        amount: income.amount,
        date: income.date,
      };
      setIncomes((prevIncomes) => {
        return [...prevIncomes, newIncome];
      });
      //reset the state
      setIncome({
        source: '',
        amount: 0,
        date: '',
      });
    }
  };

  const handleIncomeDelete = (id: string) => {
    const filteredIncomes = incomes.filter((income) => income.id !== id);
    setIncomes(filteredIncomes);
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
            id="income-source"
            value={income.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of income</label>
          <input
            type="number"
            name="amount"
            id="income-amount"
            value={income.amount == 0 ? '' : income.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date of income</label>
          <input
            type="date"
            name="date"
            id="income-date"
            value={income.date}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add income</button>
      </form>

      {/* list the data from array */}
      {incomes.length > 0 && (
        <ul>
          {incomes.map((income: IncomeType) => {
            return (
              <li key={income.id}>
                {income.source}: {income.amount}EUR on {income.date}
                <button onClick={() => handleIncomeDelete(income.id!)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default IncomeForm;
