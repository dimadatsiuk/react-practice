import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const onFormSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  };




  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      {/* <label>Amount </label>
      <input type="number" min="0" value={enteredAmount} onChange={onInputChangeHandler} /> */}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
            id: 'amount_' + props.id, 
            type: "number",
            min: "0",
            max: '10',
            step: '1',
            defaultValue: '1'
        }}
        />
        
      <button type="submit">+ Add</button>
      {!amountIsValid && <div>Amount is not valid</div>}
    </form>
  );
};

export default MealItemForm;
