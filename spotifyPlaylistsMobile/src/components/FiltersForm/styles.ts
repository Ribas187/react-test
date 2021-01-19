import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Form = styled.View`
  margin-top: 40px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const SearchArea = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const FilterButton = styled(RectButton)`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #04d361;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
`;

export const NameInput = styled.TextInput`
  width: 100%;
  flex: 1;
  height: 50px;
  padding: 0 10px;
  border: 0;
  border-radius: 5px;
  color: #3a3a3a;
  background-color: #fff;
  margin-right: 10px;

  font-size: 18px;
`;

export const Filters = styled.View`
  background: #f0f0f5;
  padding: 20px 20px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const FiltersTitle = styled.Text`
  font-size: 20px;
`;

export const InputGroup = styled.View`
  width: 100%;
  margin: 10px 0;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 2px;
`;

export const DateButton = styled(RectButton)`
  height: 45px;
  padding: 10px 12px;
  border: 0;
  border-radius: 5px;
  background-color: #fff;
  width: 100%;
  justify-content: center;
`;

export const DateButtonText = styled.Text`
  color: #ccc;
  font-size: 16px;
`;

export const InputText = styled.TextInput`
  height: 45px;
  padding: 10px 12px;
  border-radius: 5px;
  color: #ccc;
  background-color: #fff;
  font-size: 16px;
  width: 100%;
`;

export const SearchButton = styled(RectButton)`
  height: 50px;
  background: #04d361;
  border-radius: 5px;
  font-weight: bold;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SearchButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
