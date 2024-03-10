import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeForm from './components/IncomeForm';
import ExpenceForm from './components/ExpenceForm';
import TargetForSaving from './components/TargetForSaving';
import TransferToSaving from './components/TransferToSaving';

function App() {
  const [SavingAmount, setSavingAmount] = useState(0);
  const getSavingAmount = (amount: number) => {
    setSavingAmount(amount);
  };

  const [totalIncome, setTotalIncome] = useState(0);
  const getTotalIncome = (amount: number) => {
    setTotalIncome(amount);
  };

  const [totalExpence, setTotalExpence] = useState(0);
  const getTotalExpence = (amount: number) => {
    setTotalExpence(amount);
  };

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

export default App;
