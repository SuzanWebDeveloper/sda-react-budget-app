import React, { ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

type TargetForSavingProps = {
  totalSaving: number;
  setTotalSaving: (amount: number) => void;
  target: number;
  setTarget: (amount: number) => void;
};

const TargetForSaving = (props: TargetForSavingProps) => {
  //---------- savings percentage
  let savingPercentage = 0;
 if (props.target !== 0 && props.totalSaving <= props.target)
    savingPercentage = Math.round((props.totalSaving / props.target) * 100);
  //------------

  const handleTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const amount = Number(event.target.value);
    amount > 0
      ? props.setTarget(amount)
      : toast.error("Amount can't be negative");
  };

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    props.setTarget(0);
    props.setTotalSaving(0);
  };

  return (
    <div className="target-saving-container">
      <form>
        <div>
          <label htmlFor="target-source">Set target</label>
          <input
            type="number"
            name="source"
            id="target-source"
            onChange={handleTargetChange}
            value={props.target}
            required
          />
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
      <p>Current saving: {props.totalSaving}</p>
      <p>Target: {props.target}</p>
      <p>
        Progress: {savingPercentage}%
        <progress value={savingPercentage} max={100} />
      </p>
    </div>
  );
};

export default TargetForSaving;
