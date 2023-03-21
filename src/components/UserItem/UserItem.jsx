import { useState } from 'react';
import {
  Avatar,
  Button,
  CardContainer,
  ImageContainer,
  LogoStyled,
  Text,
  UserCard,
} from './UserItem.styles';

export const UserItem = ({ user, updateUsersData }) => {
  const [followers, setFollowers] = useState(user.followers);
  const [isUserFollowing, setIsUserFollowing] = useState(user.isFollowing);

  const toggleFollow = () => {
    setIsUserFollowing(!isUserFollowing);

    if (isUserFollowing) {
      setFollowers(followers - 1);
      updateUsersData(user.id, followers - 1, !isUserFollowing);
    } else {
      setFollowers(followers + 1);
      updateUsersData(user.id, followers + 1, !isUserFollowing);
    }
  };

  return (
    <UserCard
      style={{
        backgroundColor: 'darkblue',
      }}
    >
      <CardContainer>
        <LogoStyled />
      </CardContainer>

      <ImageContainer>
        <Avatar src={user.avatar} alt={user.user} />
      </ImageContainer>

      <Text>{user.tweets} Tweets</Text>
      <Text>{new Intl.NumberFormat('en-US').format(followers)} Followers</Text>
      <Button
        type="button"
        onClick={toggleFollow}
        isUserFollowing={isUserFollowing}
      >
        {isUserFollowing ? 'Following ' : 'Follow'}
      </Button>
    </UserCard>
  );
};
