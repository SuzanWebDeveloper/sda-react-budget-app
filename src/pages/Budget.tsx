import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useCallback, useState } from 'react';

import IncomeForm from '../components/IncomeForm';
import ExpenceForm from '../components/ExpenceForm';
import TargetForSaving from '../components/TargetForSaving';
import TransferToSaving from '../components/TransferToSaving';

function Budget() {
  const [SavingAmount, setSavingAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpence, setTotalExpence] = useState(0);

  const getSavingAmount = useCallback((amount: number) => {
    setSavingAmount(amount);
  }, []);

  const getTotalIncome = useCallback(
    (amount: number) => {
      setTotalIncome(amount);
    },
    [totalIncome]
  );

  const getTotalExpence = useCallback((amount: number) => {
    setTotalExpence(amount);
  }, []);

  return (
    <div className="component-container">
      <ToastContainer />
      <IncomeForm onGetTotalIncome={getTotalIncome} />
      <ExpenceForm onGetTotalExpence={getTotalExpence} />
      <TargetForSaving savingAmount={SavingAmount} />
      <TransferToSaving
        OnGetSavingAmount={getSavingAmount}
        totalIncomeAmount={totalIncome}
        totalExpenceAmount={totalExpence}
        savingAmount={SavingAmount}
      />
    </div>
  );
}
export default Budget;
