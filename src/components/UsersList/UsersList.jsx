import { useEffect, useState } from 'react';
import storage from 'helpers/storage';
import data from '../../data.json';
import { UserItem } from 'components/UserItem/UserItem';
import { UserList } from './UsersList.styled';

export const UsersList = () => {
  const [users, setUsers] = useState(storage.load('users-list') ?? data.users);

  useEffect(() => {
    storage.save('users-list', users);
  }, [users]);

  const updateUsersData = (id, followers, isFollow) => {
    const updateUsers = users.map(user => {
      if (user.id === id) {
        user.followers = followers;
        user.isFollowing = isFollow;
      }
      return user;
    });
    setUsers(updateUsers);
  };

  return (
    <UserList>
      {users.map(user => {
        return (
          <UserItem
            key={user.id}
            user={user}
            updateUsersData={updateUsersData}
          />
        );
      })}
    </UserList>
  );
};
