import { useState } from 'react';
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
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
