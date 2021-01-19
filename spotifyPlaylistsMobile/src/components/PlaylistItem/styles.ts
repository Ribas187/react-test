import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background: #f0f0f5;
  border-radius: 5px;
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;

  margin-bottom: 16px;
`;

export const PlaylistImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;
`;

export const Info = styled.View`
  margin: 16px;
  flex: 1;
`;

export const PlaylistName = styled.Text`
  font-size: 20px;
  color: #3d3d4d;
  font-weight: bold;
`;

export const PlaylistOwner = styled.Text`
  color: #a8a8b6;
`;

export const PlaylistDescription = styled.Text`
  font-size: 18px;
  color: #a8a8b6;
  margin-top: 4px;
`;
