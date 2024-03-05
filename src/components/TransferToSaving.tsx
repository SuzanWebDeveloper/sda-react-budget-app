import React from 'react';

const TransferToSaving = () => {
  return (
    <div className="trasnsferToSaving-container">
      <p>Current Balance: 0</p>
      <form>
        <label htmlFor="source">Transfer to saving account</label>
        <input type="text" name="source" id="source" required></input>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default TransferToSaving;
