import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { Heading, NativeBaseProvider,HStack,VStack,Input,Center,Box,Avatar,Spacer, ScrollView } from 'native-base'
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toogle1 from './Toogle1';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserMessage = ({navigation}) => {
  const [toggle,SetToggle] = React.useState(false);
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
        <NativeBaseProvider>
          {/* ///header start */}
          <Toogle1 toggle = {toggle} SetToggle={SetToggle} />
        <HStack justifyContent='space-evenly' padding={3}>
       
        <FIcon onPress={()=>navigation.navigate('UserHome')} name="arrow-left" size={28} color="white" />
        <Pressable onPress={()=> SetToggle(true)}>
            <View style={{flexDirection:'row' ,marginRight:60}}>
              <Text style={{fontWeight:'700',fontSize:19,color:'white'}}>yash_raj172000</Text>
              <MatIcon name="keyboard-arrow-down" style={{left:5}} size={25} color="white" />
            </View>
        </Pressable>

          <HStack >
            <FIcon name="video" style={{marginRight:30}} size={28} color="white" />
            <FIcon name="edit" size={24} color="white" />
          </HStack>
        </HStack>
        {/* ////header end */}
        <VStack w="100%" space={5} style={{backgroundColor:'black',padding:12,marginVertical:5}} alignSelf="center">
        <Input placeholder="Search" variant="filled" bgColor='gray.800' color='white' width="100%" borderRadius="10" py="1" px="5" height='10'borderWidth="0" InputLeftElement={<Icon name="search" style={{left:10}} size={20} color="white" />}/>
      </VStack>

          <VStack space={5}>
         <ScrollView showsVerticalScrollIndicator={false}>


          <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
          <Box w="100%" h="65" pl={4} mb={3.5} rounded="md" >
         <HStack space={4} alignItems="center">
         <Avatar size="58px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
        <VStack space={0.5}>
        <Heading color='white'fontSize={15} fontWeight='700'>
          Yash Raj
        </Heading>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                Send 13m ago
                </Text>
        </VStack>
        <Spacer />
        <FIcon name="camera" style={{marginRight:15}} size={25} color="white" />
         </HStack>
        </Box>
          </TouchableOpacity>
   
          <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
          <Box w="100%" h="65" pl={4} mb={3.5} rounded="md" >
         <HStack space={4} alignItems="center">
         <Avatar size="58px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
        <VStack space={0.5}>
        <Heading color='white'fontSize={15} fontWeight='700'>
          Yash Raj
        </Heading>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                Send 13m ago
                </Text>
        </VStack>
        <Spacer />
        <FIcon name="camera" style={{marginRight:15}} size={25} color="white" />
         </HStack>
        </Box>
          </TouchableOpacity>
   
          <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
          <Box w="100%" h="65" pl={4} mb={3.5} rounded="md" >
         <HStack space={4} alignItems="center">
         <Avatar size="58px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
        <VStack space={0.5}>
        <Heading color='white'fontSize={15} fontWeight='700'>
          Yash Raj
        </Heading>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                Send 13m ago
                </Text>
        </VStack>
        <Spacer />
        <FIcon name="camera" style={{marginRight:15}} size={25} color="white" />
         </HStack>
        </Box>
          </TouchableOpacity>
   
        <Box w="100%" h="65" pl={4} mb={3.5} rounded="md" >
         <HStack space={4} alignItems="center">
         <Avatar size="58px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
        <VStack space={0.5}>
        <Heading color='white'fontSize={15} fontWeight='700'>
          Yash Raj
        </Heading>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                Send 13m ago
                </Text>
        </VStack>
        <Spacer />
        <FIcon name="camera" style={{marginRight:15}} size={25} color="white" />
         </HStack>
        </Box>
        <Box w="100%" h="65" pl={4} mb={3.5} rounded="md" >
         <HStack space={4} alignItems="center">
         <Avatar size="58px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
        <VStack space={0.5}>
        <Heading color='white'fontSize={15} fontWeight='700'>
          Yash Raj
        </Heading>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                Send 13m ago
                </Text>
        </VStack>
        <Spacer />
        <FIcon name="camera" style={{marginRight:15}} size={25} color="white" />
         </HStack>
        </Box>


        </ScrollView>
        </VStack>
    
     
      
        </NativeBaseProvider>
    </View>
  )
}

export default UserMessage

const styles = StyleSheet.create({})