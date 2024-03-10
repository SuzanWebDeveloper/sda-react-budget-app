import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const TargetForSaving = (props: { savingAmount: number }) => {
  const [target, setTarget] = useState(0);

  //------------ total savings
  const [savings, setSavings] = useState<number[]>([]);
  const totalSavings = savings.reduce(
    (total, currentSaving) => total + currentSaving,
    0
  );

  //---------- savings percentage
  useEffect(() => {
    if (totalSavings <= target && totalSavings + props.savingAmount <= target) {
      setSavings((prev) => {
        return [...prev, props.savingAmount];
      });
    } else if (!target) console.log('no target');
    else console.log('amout greater than target');
  }, [props.savingAmount]);

  let savingPercentage = 0;
  if (target !== 0 && totalSavings <= target)
    savingPercentage = (totalSavings / target) * 100;
  //-------------

  const handleTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    setTarget(0);
    setSavings([]);
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
      <p>Current saving: {totalSavings}</p>
      <p>Target: {target}</p>
      <p>
        Progress: {savingPercentage}%
        <progress value={savingPercentage} max={100} />
      </p>
    </div>
  );
};

export default TargetForSaving;
