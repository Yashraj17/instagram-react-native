import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import Profile from '../Components/Profile';
import Activity from '../Components/Activity';
import Reels from '../Components/Reels';
import Settings from '../Components/Settings';
import Home from '../Components/Home';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route})=>({
    tabBarStyle: { position: 'absolute',backgroundColor:'black',borderTopColor:'black', },
    tabBarHideOnKeyboard: true,
    tabBarLabel: ({ focused }) => {
let label;
switch (route.name) {
case 'Home':
  return label = focused ? <Text style={{ color:'white',fontSize:10  }}>Home</Text> : null
case 'Settings':
  return label = focused ? <Text style={{ color:'white',fontSize:10  }}>Search</Text> : null
case 'Reels':
  return label = focused ? <Text style={{ color:'white',fontSize:10  }}>Reels</Text> : null
case 'Activity':
  return label = focused ? <Text style={{ color:'white',fontSize:10  }}>Activity</Text> : null
case 'Profile':
  return label = focused ? <Text style={{ color:'white',fontSize:10 }}>Profile</Text> : null
}
return label
    }
})}>

      <Tab.Screen name="Instagram" component={Home} options={({route})=>({ 
      headerTintColor:'white',
      headerShown:false,
      headerStyle:{
        backgroundColor:'black',

      },
      tabBarIcon:()=>{ return <Icon name="home"  size={28} color="white" />}, 
      tabBarStyle: ((route) => {
        const routename = getFocusedRouteNameFromRoute(route)
        
        if (routename === 'UserMessage') {
          return { display: 'none' }
        }
        else {
          return { backgroundColor: 'black', elevation: 0, borderTopWidth: .3, borderTopColor: '#8c8c8c94' }
        }
      })(route),
        })} />

      <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon:()=>{
      return  <Icon name="search"  size={28} color="white" />
      },headerShown:false,
      }} />

      <Tab.Screen name="Reels" component={Reels} options={{tabBarIcon:()=>{
      return  <Icon name="play-circle"  size={28} color="white" />
      }}} />

      <Tab.Screen name="Activity" component={Activity} options={{
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'black'
        },
      tabBarIcon:()=>{
      return  <Icon name="heart-o"  size={28} color="white" />
      }
      }} />

      <Tab.Screen name="Profile" component={Profile} options={({ navigation, route })=>({
        tabBarIcon:()=>{
          return  <Icon name="user-circle"  size={28} color="white" />
        },

        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'black',
          borderBottomColor:'black'
        },
      
      
      })} />
      </Tab.Navigator> 
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})