import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";
import Wrapper from "./components/Helpers/Wrapper";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  const onAddUserHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
    console.log(user);
  };

  const deleteItemHandler = (userId) => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    })

  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          setError={setError}
        />
      )}
      <AddUser onSaveUser={onAddUserHandler} setError={setError} />
      <UsersList allUsers={users} onDeleteitem={deleteItemHandler}/>
    </Wrapper>
  );
};

export default App;
