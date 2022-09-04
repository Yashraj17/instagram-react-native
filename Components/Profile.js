import { StyleSheet, View,Pressable,Text } from 'react-native'
import FIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { NativeBaseProvider,useDisclose,VStack,Input,Heading, ScrollView,Center,Flex,HStack,Image,Box,Modal,Button,Avatar } from 'native-base'
import Toogle1 from './Toogle1';
import Toggle2 from './Toggle2';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopNavigation from '../Screens/TopNavigation';
import EditModel from './EditModel';
const Tab = createMaterialTopTabNavigator();


const Profile = ({navigation}) => {
  const [toggle,SetToggle] = React.useState(false)
  const [toggleSetting,setToggleSetting] = React.useState(false)
  const [fav,setFav] = React.useState(true)
  const [editModel,setEditModel] = React.useState(false)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:()=>(
         
        <Pressable onPress={()=> SetToggle(true)}>
            <View style={{flexDirection:'row'}}>
              <FIcon name="lock"  size={15}  style={{top:8,right:6}} color="white"  />
              <Text style={{fontWeight:'700',fontSize:20,color:'white'}}>yash_raj172000</Text>
              <MatIcon name="keyboard-arrow-down" style={{left:5}} size={28} color="white" />
            </View>
        </Pressable>
        
          ),

          headerRight: () => (
            <View style={{flexDirection:'row'}}>
               <MIcon name="plus-box-outline" style={{marginRight:30}} size={28} color="white" />
             <FIcon onPress={()=>setToggleSetting(true)} name="menu" style={{marginRight:10}} size={28} color="white" />
            
            </View>
           ),
    });
  });

  return (
    
<>
<View style={{backgroundColor: 'black', flex: 1}}>
      <NativeBaseProvider>
      <Center>
      <EditModel editModel={editModel} setEditModel={setEditModel} />
      </Center>
{/* //////////////////edit model */}
        {
          !toggleSetting && (
            <Toogle1 toggle = {toggle} SetToggle={SetToggle}/>
          )
        }
        {
          !toggle && (
                <Toggle2 toggleSetting = {toggleSetting} setToggleSetting={setToggleSetting}/> 
          )
        }
       <HStack  marginTop={3} justifyContent='space-evenly'>
            <Box alignItems="center">
            <Avatar size="80px"
            style={{borderWidth: 2, borderColor: 'gray'}}
            source={{
            uri: 'https://static-ai.asianetnews.com/images/01f99a2szvqr6tjpgpv9px204x/920fda8e0d7064bb57a87d0e3b7674fd-png.jpg'
        }} />
                  </Box>
                
                  <HStack space={10} marginTop={5}>
                  <Box >
                    <Heading fontSize={20} textAlign='center' color='white'>12</Heading>
                    <Heading fontWeight='400' fontSize={16} color='white'>Posts</Heading>
                </Box>
                <Box>
                    <Heading  fontSize={20} textAlign='center' color='white'>2.4 M</Heading>
                    <Heading  fontWeight='400' fontSize={16} color='white'>Followers</Heading>
                </Box>
                <Box>
                    <Heading  fontSize={20} textAlign='center' color='white'> 1069</Heading>
                    <Heading  fontWeight='400' fontSize={16} color='white'>Following</Heading>
                </Box>
                  </HStack>
          </HStack>
            <VStack paddingX={5} marginTop={3}>
                <Heading color='white' fontSize={15}>Yash Raj</Heading>
                <Heading color='white' fontSize={15} fontWeight='400'>Until i found you </Heading>
            </VStack>
      
      {/* <ScrollView> */}
     

          <HStack paddingX={2} marginY={5}>
                <Button onPress={()=>setEditModel(true)} size="sm" flexGrow={1} variant="outline" _text={{color:'white',fontWeight:'700',fontSize:15}}>
                    Edit Profile
                </Button>
          </HStack>

          <VStack paddingX={4} bgColor="red" >
              <Pressable onPress={()=>setFav(!fav)}>
                  <HStack>
                  
                          <Heading color='white' flexGrow={3} fontSize={14}>Story Highlights</Heading>
                          {
                            fav &&  (<MatIcon name="keyboard-arrow-down"  size={20} color="white" />)
                          }
                          {
                            !fav &&  (<MatIcon name="keyboard-arrow-up"  size={20} color="white" />)
                          }
                          
                  </HStack>
              </Pressable>
          </VStack>


          {/* //////////////Highlights */}
          {
            fav && (
              
              <VStack space={3} paddingX={4} marginBottom={5}>
              <Heading color='white' fontWeight='400' fontSize={14}>Keep your favourite stories on your profile</Heading>

              <ScrollView horizontal={true}>
                <HStack
                  space={6}
                  justifyContent="center"
                  >
                    <Box alignItems="center">
                      <Avatar
                        style={{borderWidth: 2, borderColor: 'gray'}}
                        size="lg"
                        source={{
                          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                        }}>
                        AJ
                      </Avatar>
                      <Heading color='white' fontWeight='400' fontSize={14}>Travel</Heading>
                    </Box>
                    <Box alignItems="center">
                      <Avatar
                        style={{borderWidth: 2, borderColor: 'gray'}}
                        size="lg"
                        source={{
                          uri: 'https://t4.ftcdn.net/jpg/02/56/19/69/360_F_256196954_lmcu4nMFri6REiLjHGeHkkjFq2ywzsVa.jpg',
                        }}>
                        AJ
                      </Avatar>
                      <Heading color='white' fontWeight='400' fontSize={14}>Travel</Heading>
                    </Box>
                    <Box alignItems="center">
                      <Avatar
                        style={{borderWidth: 2, borderColor: 'gray'}}
                        size="lg"
                        source={{
                          uri: 'https://i.pinimg.com/736x/b3/a8/c1/b3a8c19938060b8a81ed1a7a85831c53.jpg',
                        }}>
                        AJ
                      </Avatar>
                      <Heading color='white' fontWeight='400' fontSize={14}>Travel</Heading>
                    </Box>
                    <Box alignItems="center">
                      <Avatar
                        style={{borderWidth: 2, borderColor: 'gray'}}
                        size="lg"
                        source={{
                          uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                        }}>
                        AJ
                      </Avatar>
                      <Heading color='white' fontWeight='400' fontSize={14}>Travel</Heading>
                    </Box>
                    <Box alignItems="center">
                      <Avatar
                        style={{borderWidth: 2, borderColor: 'grey'}}
                        size="lg"
                        source={{
                          uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                        }}>
                        AJ
                      </Avatar>
                      <Heading color='white' fontWeight='400' fontSize={14}>Travel</Heading>
                    </Box>
                    <Box alignItems="center">
                      <Avatar
                        style={{borderWidth: 2, borderColor: 'grey'}}
                        size="lg"
                        source={{
                          uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                        }}>
                        AJ
                      </Avatar>
                      <Heading color='white' fontWeight='400' fontSize={14}>Travel</Heading>
                    </Box>
                </HStack>
              </ScrollView>
              </VStack>
            )
          }

          
      <TopNavigation/>

      </NativeBaseProvider>
    </View>
    
  
   </>
  )
}

export default Profile

const styles = StyleSheet.create({})