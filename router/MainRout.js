import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome"
import Home from '../screens/Aut/Home';
import Profile from '../screens/Aut/Profile';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainRout() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} 
      
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
       />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="user" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainRout;
