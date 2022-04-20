
const UserItem = props => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    }

    return(
        <li onClick={deleteHandler}>
            <p>User {props.username} is {props.age} years old. </p>
        </li>
    );

}

export default UserItem;