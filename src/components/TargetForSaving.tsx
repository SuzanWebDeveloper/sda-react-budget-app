import React from 'react';

const TargetForSaving = () => {
  return (
    <div className="targetSaving-container">
      <form action="">
        <div>
          <label htmlFor="source">Set target</label>
          <input type="text" name="ts-source" id="ts-source" required />
          <button>Reset</button>
        </div>
        <p>Current saving:</p>
        <p>Target:</p>
        <p>
          Progress:
          <progress></progress>
        </p>
      </form>
    </div>
  );
};

export default TargetForSaving;
