import React from 'react';

const IncomeForm = () => {
  return (
    <div className="incomeForm-container">
      <form action="">
        <div className="pair">
          <label htmlFor="source">Income source</label>
          <input
            type="text"
            placeholder="Salary"
            name="source"
            id="source"
            required
          />
        </div>
        <div>
          <label htmlFor="">Amount of income</label>
          <input type="text" name="amount" id="amount" required />
        </div>
        <div>
          <label htmlFor="">Date of incom</label>
          <input type="date" name="date" id="date" required />
        </div>
        <button>Add income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
