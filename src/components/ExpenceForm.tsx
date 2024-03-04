import React from 'react';

const ExpenceForm = () => {
  return (
    <div className="expenceForm-container">
      <form action="">
        <div>
          <label htmlFor="source">Expence source</label>
          <input
            type="text"
            placeholder="Electricity bill"
            name="exp-source"
            id="exp-source"
            required
          />
        </div>
        <div>
          <label htmlFor="">Amount of expence</label>
          <input type="text" name="exp-amount" id="exp-amount" required />
        </div>
        <div>
          <label htmlFor="">Date of expence</label>
          <input type="date" name="exp-date" id="exp-date" required />
        </div>
        <button>Add expence</button>
      </form>
    </div>
  );
};

export default ExpenceForm;
