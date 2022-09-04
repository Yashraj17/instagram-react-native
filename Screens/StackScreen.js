import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


import { createStackNavigator } from '@react-navigation/stack'; 
import BottomNavigation from './BottomNavigation';
import Chat from '../Components/Chat';
import AddPost from '../Components/AddPost';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
  <NavigationContainer>
         <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="InterFace" options={{headerShown:false}} component={BottomNavigation} />
        <Stack.Screen name="Chat" options={{headerShown:false}} component={Chat} />
        <Stack.Screen name='AddPost' options={{headerShown:false}} component={AddPost} />
        <Stack.Screen name='Login' options={{headerShown:false}} component={Login} />
        <Stack.Screen name='Signup' options={{headerShown:false}} component={Signup} />
       </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackScreen
