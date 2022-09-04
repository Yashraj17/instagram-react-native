import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Photos from '../Components/Photos';
import Tags from '../Components/Tags';
import Videos from '../Components/Videos';
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialTopTabNavigator();


const TopNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarShowLabel:false,
      tabBarIndicatorStyle:{
        backgroundColor:'white',
        height:1.5
      },
      tabBarStyle:{
        backgroundColor:'black'
      }
    })}
    >
      <Tab.Screen name="Photos" component={Photos} options={{tabBarIcon:()=>(
          <MIcon name="grid"  size={25} color="grey" />
      ),
      }} />
      <Tab.Screen name="Videos" component={Videos} 
       options={{tabBarIcon:()=>(
        <Icon name="play-circle"  size={25} color="grey" />
    ),
    }} 
      />
      <Tab.Screen name="Tags" component={Tags}
       options={{tabBarIcon:()=>(
        <FIcon name="user"  size={28} color="grey" />
    ),
    }} 
      />
    </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default TopNavigation

const styles = StyleSheet.create({})