import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading, HStack, NativeBaseProvider, VStack,Avatar,Input,Image, Box } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Feather';

const AddPost = ({navigation}) => {
  return (
    <View style={{backgroundColor:'black',flex:1}}>
     <NativeBaseProvider>
     <HStack style={{justifyContent:'space-between'}} marginTop={2}>
        <HStack space={3} marginLeft={2} >
           <FIcon name='arrow-left' size={25} color='white' onPress={()=>navigation.navigate('InterFace')} />
            <Heading color='white' fontSize={20} fontWeight='500'>AddPost</Heading>
        </HStack>
        <HStack>
        <MIcon name='done' size={30} style={{right:15}} color='white' />
        </HStack>
      </HStack>
      <HStack justifyContent='space-between' style={{backgroundColor:'black'}}  marginTop={4}>
 
         <Image source={require('../Image/demo.jpg')} alt='logo' style={{height:65,width:'22%',marginLeft:10}} />
        <Box w="75%" style={{marginRight:5,paddingLeft:5}}>
        <Input placeholder="Write a caption.." marginTop={2}  color='white'
          fontSize='15px'  bgColor='black'
          multiline
          borderWidth={0} height={50} />  
        </Box>
       

      </HStack>
     </NativeBaseProvider>
     
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({})