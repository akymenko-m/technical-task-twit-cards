import styled from 'styled-components';
import bcImage from '../../images/bc-image.png';
import { ReactComponent as Logo } from '../../images/logo.svg';

export const UserCard = styled.li`
  width: 380px;
  height: 460px;
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardContainer = styled.div`
  height: 214px;
  background-image: url(${bcImage});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  &::after {
    content: '';
    height: 8px;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const LogoStyled = styled(Logo)`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 210px;
  left: 150px;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50px;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  &:first-of-type {
    margin-top: 62px;
    margin-bottom: 16px;
  }
  &:last-of-type {
    margin-bottom: 26px;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;
  background-color: ${({ isUserFollowing }) =>
    isUserFollowing ? '#5CD3A8' : '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
