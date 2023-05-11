import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/screens/dashboard';
import Login from './src/screens/Login';
import List from './src/screens/List';
import Navbar from './src/screens/Navbar';





export default function App() {
  return (
    <Dashboard/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
