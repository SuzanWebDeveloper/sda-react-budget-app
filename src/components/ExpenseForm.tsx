import React, { ChangeEvent, useState, FormEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

type ExpenseType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type TotalExpenseProps = { onGetTotalExpense: (amount: number) => void };

const ExpenseForm = (props: TotalExpenseProps) => {
  const [expense, setExpense] = useState<ExpenseType>({
    source: '',
    amount: 0,
    date: '',
  });
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  const totalExpense = expenses.reduce(
    (total, currentExpense) => total + currentExpense.amount,
    0
  );

  useEffect(() => {
    props.onGetTotalExpense(totalExpense);
  }, [totalExpense, props]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'amount') {
      const amount = Number(event.target.value);
      amount > 0
        ? setExpense((prevIncome) => {
            return { ...prevIncome, [event.target.name]: amount };
          })
        : toast.error("Amount can't be negative");
    } else
      setExpense((prevIncome) => {
        return { ...prevIncome, [event.target.name]: event.target.value };
      });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (expense.amount == 0) toast.error('Please enter amount');
    else {
      const newExpense = {
        id: uuidv4(),
        source: expense.source,
        amount: expense.amount,
        date: expense.date,
      };
      setExpenses((prevExpenses) => {
        return [...prevExpenses, newExpense];
      });
      setExpense({
        source: '',
        amount: 0,
        date: '',
      });
    }
  };

  const handleExpenseDelete = (id: string) => {
    const filteredIncomes = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredIncomes);
  };

  return (
    <div className="expense-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="expense-source">Expense source</label>
          <input
            type="text"
            placeholder="Electricity bill"
            name="source"
            id="expense-source"
            value={expense.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expense-amount">Amount of expense</label>
          <input
            type="number"
            name="amount"
            id="expense-amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expense-date">Date of expense</label>
          <input
            type="date"
            name="date"
            id="expense-date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add expense</button>
      </form>
      {/* display expenses */}
      {expenses.length > 0 && (
        <ul>
          {expenses.map((expense: ExpenseType) => {
            return (
              <li key={expense.id}>
                {expense.source}: {expense.amount}EUR on {expense.date}
                <button onClick={() => handleExpenseDelete(expense.id!)}>
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

export default ExpenseForm;
