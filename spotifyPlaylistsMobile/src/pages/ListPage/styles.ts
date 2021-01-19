import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;

  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() : 10}px 30px 30px;

  background: #121212;
`;

export const LogoImage = styled.Image`
  height: 50px;
  width: auto;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #f0f0f5;
  max-width: 450px;
  line-height: 56px;
  font-weight: 600;

  margin-top: 20px;
`;

export const Playlists = styled.View`
  margin-top: 80px;
`;

export const Pagination = styled.View`
  margin: 20px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationButton = styled(RectButton)``;

export const PaginationText = styled.Text`
  color: #f0f0f5;
`;

export const NotFoundText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #d6d6d6;
`;
