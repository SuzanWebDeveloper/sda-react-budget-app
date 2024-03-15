import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type TransfertoSavingProps = {
  totalIncomeAmount: number;
  totalExpenseAmount: number;
  totalSaving: number;
  setTotalSaving: (amount: number) => void;
  target: number;
};

type Input = {
  amount: number;
};

const TransferToSaving = (props: TransfertoSavingProps) => {
  const balance =
    props.totalIncomeAmount - props.totalExpenseAmount - props.totalSaving;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    let totalSaving = data.amount + props.totalSaving;
    if (!props.target) {
      toast.error('Please enter target');
      return;
    }
    if (data.amount > balance) {
      toast.error('Amount is greater than balance');
      return;
    }
    if (totalSaving > props.target) {
      toast.error('Saving amount exceeds target');
      return;
    }
    props.setTotalSaving(totalSaving);
    reset();
  };

  return (
    <div className="transfer-container">
      <p>Current Balance: {balance}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="transfer-amount">Transfer to saving account</label>
        <input
          type="number"
          id="transfer-amount"
          {...register('amount', {
            valueAsNumber: true,
            required: 'Please enter amount',
            min: { value: 0, message: "Amount can't be negative" },
          })}
        />
        {errors.amount && <p className="error"> {errors.amount.message}</p>}
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default TransferToSaving;
