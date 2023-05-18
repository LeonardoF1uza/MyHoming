import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './app/components/List';
import Login from './app/components/Login';
import Dashboard from './app/components/Dashboard';
import Calendar from './app/components/Calendar';
import Ledger from './app/components/Ledger';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen  name="Dashboard" component={Dashboard} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Ledger" component={Ledger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
