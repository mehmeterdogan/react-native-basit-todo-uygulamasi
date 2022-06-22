// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRout from './router/AppRout';
import { Provider } from 'react-redux';
import Store from './redux/Stores/Store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
    <AppRout/>
    </Provider>
  );
}

export default App;