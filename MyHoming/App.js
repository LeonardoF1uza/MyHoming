import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './src/screens/List';

import Login from './src/screens/Login';
import dashboard from './src/screens/dashboard';
import Balance from './src/screens/Balance';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Balance/>
/*=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="dashboard" component={dashboard} />
        <Stack.Screen name="Balance" component={Balance} />
        
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> 3a12db79c40c43493d8834f366a05d5c634d1427*/
  );
};

export default App;
