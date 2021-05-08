import { useState, Fragment } from 'react';
import "./App.css";
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = user => {
    setUserList(prevState => {
      return [...prevState, user];
    })
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </Fragment>
  );
}

export default App;
