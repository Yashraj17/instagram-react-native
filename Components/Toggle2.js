import { Pressable, StyleSheet, View,TouchableOpacity } from 'react-native'
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { Button, Actionsheet,Radio, useDisclose, Box, Text, Center, NativeBaseProvider,Avatar, Heading } from "native-base";
import auth from '@react-native-firebase/auth'
const Toggle2 = ({toggleSetting,setToggleSetting}) => {

    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
      const handleToggle = ()=>{
        setToggleSetting(false)
      }
      const signOut = async ()=>{
   auth()
  .signOut()
  .then(() => console.log('User signed out!'));
      }
  return (
    <Actionsheet 
    isOpen={toggleSetting} onClose={()=>handleToggle()} size="full">
       <Actionsheet.Content  bgColor='gray.800' paddingY={0}>
         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <FIcon name="settings" size={28} color="white" />
          }>
            <Heading style={{color:'white',fontSize:15,fontWeight:'600'}}> Settings</Heading>
         </Actionsheet.Item>
         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <Entypo name="back-in-time" size={28} color="white" />
          }>
            <Heading style={{color:'white',fontSize:15,fontWeight:'600'}}> Archive</Heading>
         </Actionsheet.Item>
         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <MatIcon name="timelapse" size={28} color="white" />
          }>
            <Heading style={{color:'white',fontSize:15,fontWeight:'600'}}> Your activity</Heading>
         </Actionsheet.Item>
         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <MatIcon name="qr-code-scanner" size={28} color="white" />
          }>
            <Heading style={{color:'white',fontSize:15,fontWeight:'600'}}> QR code</Heading>
         </Actionsheet.Item>

         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <Icon name="bookmark-o" size={28} color="white" />
          }>
            <Heading style={{color:'white',fontSize:15,fontWeight:'600'}}> Saved</Heading>
         </Actionsheet.Item>

         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <MIcon name="playlist-star" size={28} color="white" />
          }>
            <Heading style={{color:'white',fontSize:15,fontWeight:'600'}}> Close friends</Heading>
         </Actionsheet.Item>

         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <MIcon name="account-plus-outline" size={28} color="white" />
          }>
            <Heading style={{color:'white',fontSize:15,fontWeight:'600'}}> Dissover people</Heading>
         </Actionsheet.Item>

         <Actionsheet.Item bgColor='gray.800'
          startIcon={
            <MatIcon name="logout" size={28} color="white" />
          }>
            <TouchableOpacity onPress={()=>signOut()}>
                <Heading style={{color:'red',fontSize:15,fontWeight:'600'}}> Logout</Heading>
            </TouchableOpacity>
         </Actionsheet.Item>

       </Actionsheet.Content>
     </Actionsheet>
  )
}

export default Toggle2