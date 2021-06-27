import Users from "./components/Users";
import UserFinder from "./components/UserFinder";
import UserContext from './Store/user-context';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {

  const UsersContext={
    users:DUMMY_USERS
  }
  return (
    
      <UserContext.Provider value={UsersContext}>
      <UserFinder />
      </UserContext.Provider>
  );
}

export default App;
