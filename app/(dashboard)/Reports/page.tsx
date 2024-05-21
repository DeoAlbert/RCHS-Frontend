import { FC } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // Add other fields as necessary
}

const UsersPage: FC = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
