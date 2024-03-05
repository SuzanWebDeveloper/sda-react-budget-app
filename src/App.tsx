import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeForm from './components/IncomeForm';
import ExpenceForm from './components/ExpenceForm';
import TargetForSaving from './components/TargetForSaving';
import TransferToSaving from './components/TransferToSaving';

function App() {
  return (
    <div className="component-container">
      <IncomeForm />
      <ExpenceForm />
      <TargetForSaving />
      <TransferToSaving />
    </div>
  );
}

export default App;
