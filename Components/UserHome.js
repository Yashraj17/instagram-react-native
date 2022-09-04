import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, NativeBaseProvider, ScrollView } from 'native-base'
import PublicStatusBar from './PublicStatusBar'
import { VStack } from 'native-base'
import Posts from './Posts'
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react'

const Tab = createBottomTabNavigator()
const UserHome =  ({navigation}) => {
  useEffect(()=>{ firestore().collection('posts').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc && doc.exists) {
          console.log(doc.id, ' => ', doc.data());
        }
      });
    });
  },[])
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <NativeBaseProvider>
        <HStack  justifyContent='space-between'>
        <Image source={require('../Image/logo.png')} style={{height:35,width:115,left:20,top:10}} />
          <HStack padding={2}>
            <MIcon name="plus-box-outline" onPress={()=>navigation.navigate('AddPost')} style={{marginRight:30}} size={28} color="white" />
            <MIcon onPress={()=>navigation.navigate('UserMessage')} name="facebook-messenger" style={{marginRight:10}} size={28} color="white" />
          </HStack>
        </HStack>
     

            <ScrollView showsVerticalScrollIndicator={false}>
                <PublicStatusBar/>
              <VStack space={3} mt={3} width="100%">
                  <Posts/>
                  <Posts/>
                  <Posts/>
                  <Posts/>
              </VStack>
          </ScrollView>
          
      </NativeBaseProvider>
    </View>
  )
}

export default UserHome

const styles = StyleSheet.create({})