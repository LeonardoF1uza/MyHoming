import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './src/screens/List';

import Login from './src/screens/Login';
import Dashboard from './src/screens/dashboard';
import Balance from './src/screens/Balance';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Dashboard/>
  );
};

export default App;
