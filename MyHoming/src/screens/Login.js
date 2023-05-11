import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground} from 'react-native';

import {styles} from "./../styles/css_light_mode.js";


const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    // For example, you could check if the username and password are correct and navigate to the next screen if they are
    if (username === 'User' && password === 'User') {
      navigation.navigate('dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyHoming</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Log in" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
