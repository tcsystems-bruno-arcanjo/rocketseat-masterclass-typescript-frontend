import React from 'react';
import api from './services/api';

import User from './components/User';

interface IUser {
  name: string;
  email: string;
}

function App() {

  const [users, setUsers] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    api.get<IUser[]>('/users').then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="App">
      { users.map((user) => <User key={user.email} user={user} />)}
    </div>
  );
}

export default App;
