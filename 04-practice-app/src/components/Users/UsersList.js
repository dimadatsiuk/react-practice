import classes from "./UsersList.module.css";
import Card from "../UI/Card";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.allUsers.length === 0) {
    return;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.allUsers.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            username={user.username}
            age={user.age}
            onDelete={props.onDeleteitem}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
