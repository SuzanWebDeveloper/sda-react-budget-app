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
    if (totalSaving > props.target) toast.error('Amount exceeds target');
    else props.setTotalSaving(totalSaving);

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
