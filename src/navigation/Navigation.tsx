import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootstackParams = {
  HomeScreen: undefined,
  DetailScreen: Movie,
}

const Stack = createStackNavigator<RootstackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,

    }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  );
};
