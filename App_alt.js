import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './app/components/List';
import Login from './app/components/Login';
import dashboard from './src/screens/dashboard';
import Balance from './src/screens/Balance';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="dashboard" component={dashboard} />
        <Stack.Screen name="Balance" component={Balance} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;