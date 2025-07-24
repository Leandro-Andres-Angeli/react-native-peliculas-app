import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
export type RootStackParms = {
  Home: undefined;
  Details: Movie;
};
const Stack = createStackNavigator<RootStackParms>();
const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        options={{ cardStyle: { backgroundColor: '#f2f4f7' } }}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
