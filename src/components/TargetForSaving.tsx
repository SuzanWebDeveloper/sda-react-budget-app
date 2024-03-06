import React, { ChangeEvent, FormEvent, useState } from 'react';

const TargetForSaving = (props: { savingAmount: number }) => {
  const [target, setTarget] = useState(0);

  const handleTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    setTarget(0);
  };

  return (
    <div className="targetSaving-container">
      <form action="">
        <div>
          <label htmlFor="source">Set target</label>
          <input
            type="number"
            name="source"
            id="source"
            onChange={handleTargetChange}
            value={target}
            required
          />
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
      <p>Current saving:{props.savingAmount}</p>
      <p>Target:{target}</p>
      <p>
        Progress:
        <progress></progress>
      </p>
    </div>
  );
};

export default TargetForSaving;
