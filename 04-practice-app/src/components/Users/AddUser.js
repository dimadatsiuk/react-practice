import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import {  useRef } from "react";
// import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      props.setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });

    //   setEnteredUsername("");
    //   setEnteredAge("");
      return;
    } else if (+enteredUserAge < 1) {
      props.setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });

    //   setEnteredAge("");
      return;
    } else {
      const userData = {
        username: enteredName,
        age: +enteredUserAge,
        id: (Math.random() * 10000).toFixed(0).toString(),
      };
      props.onSaveUser(userData);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    //   setEnteredUsername("");
    //   setEnteredAge("");
    }
  };

  const onClickHandler = () => {};

//   const usernameChangeHandler = (e) => {
//     setEnteredUsername(e.target.value);
//   };
//   const ageChangeHandler = (e) => {
//     setEnteredAge(e.target.value);
//   };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
        //   value={enteredName}
        //   onInput={usernameChangeHandler}
          ref={nameInputRef}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
        //   value={enteredAge}
        //   onInput={ageChangeHandler}
          ref={ageInputRef}
        ></input>

        <Button type="submit" onClick={onClickHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
