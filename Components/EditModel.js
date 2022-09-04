import { StyleSheet, Text, View,Modal } from 'react-native'
import React from 'react'
import { Heading, HStack, NativeBaseProvider,Box,Avatar, VStack,Input,Divider } from 'native-base'
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FIcon from "react-native-vector-icons/Feather";

const EditModel = ({editModel,setEditModel}) => {
    const handleClose = ()=>{
        setEditModel(false)
    }
  return (
    <NativeBaseProvider>
        <Modal transparent={true} animationType='slide' visible={editModel} >
            <View style={{backgroundColor:'black',width:'100%',height:'100%',marginTop:12}}>
                <HStack space={5} justifyContent='space-between'>
                <MIcon name="close" style={{left:20,fontWeight:'300'}} size={35} onPress={()=>handleClose()} color="white" />
                <Heading color='white' marginTop={2} fontSize={22} >Edit Profile</Heading>
                <FIcon name="check" style={{right:20,fontWeight:'300'}} size={32} color="#00a8ff" />
                </HStack>
            <HStack  justifyContent='center' mt={5}>
            <Box alignItems="center">
                      <Avatar
                        style={{borderWidth: 2, borderColor: 'gray'}}
                        size="xl"
                        source={{
                          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                        }}>
                        AJ
                      </Avatar>
                      <Heading color='#00a8ff' fontWeight='400' fontSize={18} mt={2}>Change profile photo</Heading>
                    </Box>
            </HStack>
            <VStack space={5} padding={6} >
                <Input variant="underlined" borderBottomColor='white' color='white' paddingBottom={0} placeholder="Name" />
                <Input variant="underlined" borderBottomColor='white' color='white' placeholder="UserName" />
                <Input variant="underlined" borderBottomColor='white' color='white' placeholder="Website" />
                <Input variant="underlined" multiline borderBottomColor='white' color='white' placeholder="Bio" />
                </VStack>
                <VStack space={4}>
                <Divider _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }} />
                  <Heading color='#00a8ff' fontWeight='400' fontSize={16} marginLeft={6}>Switch to Professional account</Heading>
                <Divider  _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Divider _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Heading color='#00a8ff' fontWeight='400' fontSize={16} marginLeft={6}>Switch to Professional account</Heading>
                <Divider  _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }} />
                </VStack>
                
           
            </View>
        </Modal>
     </NativeBaseProvider>
  )
}

export default EditModel

const styles = StyleSheet.create({})