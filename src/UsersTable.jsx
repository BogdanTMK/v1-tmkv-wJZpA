import React, { useEffect, useState } from 'react';
import SortUsers from './SortUsers.jsx';

const sortByName = (users, direction) => {
  const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  return direction === 'asc' ? sorted : sorted.reverse();
};

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [direction, setDirection] = useState('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/users');
      const data = await response.json();
      setUsers(Array.isArray(data) ? data : data.users ?? []);
    };
    fetchUsers();
  }, []);

  const handleSort = () => {
    setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedUsers = sortByName(users, direction);

  return (
    <div id="container" className="container m-3">
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>registration_date</td>
            <td>status</td>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.registration_date}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SortUsers onSort={handleSort} />
    </div>
  );
};

export default UsersTable;