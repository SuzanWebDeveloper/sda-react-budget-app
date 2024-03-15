import React, { useCallback, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IncomeForm from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm';
import TargetForSaving from '../components/TargetForSaving';
import TransferToSaving from '../components/TransferToSaving';

function Budget() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalSaving, setTotalSaving] = useState(0);
  const [target, setTarget] = useState(0);

  const getTotalIncome = useCallback((amount: number) => {
    setTotalIncome(amount);
  }, []);

  const getTotalExpense = useCallback((amount: number) => {
    setTotalExpense(amount);
  }, []);

  return (
    <div className="component-container">
      <ToastContainer />
      <IncomeForm onGetTotalIncome={getTotalIncome} />
      <ExpenseForm onGetTotalExpense={getTotalExpense} />
      <TargetForSaving
        totalSaving={totalSaving}
        setTotalSaving={setTotalSaving}
        target={target}
        setTarget={setTarget}
      />
      <TransferToSaving
        totalIncomeAmount={totalIncome}
        totalExpenseAmount={totalExpense}
        totalSaving={totalSaving}
        setTotalSaving={setTotalSaving}
        target={target}
      />
    </div>
  );
}
export default Budget;
