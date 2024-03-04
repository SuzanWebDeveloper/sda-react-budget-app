import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeForm from './components/IncomeForm';
import ExpenceForm from './components/ExpenceForm';
import TargetForSaving from './components/TargetForSaving';

function App() {
  return (
    <div className="component-container">
      <IncomeForm />
      <ExpenceForm />
      <TargetForSaving />
    </div>
  );
}

export default App;
