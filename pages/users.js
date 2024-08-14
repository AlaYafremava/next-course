import { useState } from "react";
import Link from "next/link";

const Users = () => {
  const [users, serUsers] = useState([
    { id: 1, name: "Jon" },
    { id: 2, name: "Ella" },
    { id: 3, name: "Mark" },
  ]);
  return (
    <div>
      <h1>User's list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user?.id}`}>{user?.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
