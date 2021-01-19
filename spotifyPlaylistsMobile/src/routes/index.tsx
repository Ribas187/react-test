import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListPage from '../pages/ListPage';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListPage" component={ListPage} />
    </Stack.Navigator>
  );
};

export default Routes;
