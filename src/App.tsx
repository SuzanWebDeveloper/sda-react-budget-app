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

  return (
    <div className="component-container">
      <IncomeForm />
      <ExpenceForm />
      <TargetForSaving savingAmount={SavingAmount} />
      <TransferToSaving OnGetSavingAmount={getSavingAmount} />
    </div>
  );
}

export default App;
