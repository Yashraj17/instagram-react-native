import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import UserHome from '../Components/UserHome';
import UserMessage from '../Components/UserMessage';

const Tab = createMaterialTopTabNavigator();

const HomeTopNavigation = () => {
  return (
   <Tab.Navigator  tabBar={() => null} >
       <Tab.Screen name='UserHome' component={UserHome} />
       <Tab.Screen name='UserMessage'  component={UserMessage}  />
   </Tab.Navigator>
  )
}

export default HomeTopNavigation