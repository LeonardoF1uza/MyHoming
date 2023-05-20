import React from 'react';
import {View, Text} from 'react-native'

import MainStackNavigation from "./app/src/navigation/routes"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainStackNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
