import { StyleSheet, View } from 'react-native'
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { Button, Actionsheet,Radio, useDisclose, Box, Text, Center, NativeBaseProvider,Avatar, Heading } from "native-base";

const Toogle1 = ({toggle,SetToggle}) => {
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
      const handleClose = ()=>{
          SetToggle(false)
      }
  return (
    <Actionsheet 
     isOpen={toggle} onClose={()=>handleClose()} size="full">
        <Actionsheet.Content  bgColor='gray.800'>
          <Actionsheet.Item 

           bgColor='gray.800'
          startIcon={
               <Avatar
               style={{borderWidth: 2, borderColor: 'white'}}
               size="md"
               source={{
                 uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
               }}>
               AJ
             </Avatar>
          }
          endIcon={
                <Icon 
                style={{left:150,top:10}}
                name="dot-circle-o" size={27} color='#00a8ff'/>
          }
          >
             <Heading style={{color:'white',fontSize:15,marginTop:10}}> yash_raj172000</Heading>
          </Actionsheet.Item>

          <Actionsheet.Item 
           bgColor='gray.800'
          startIcon={
            <MatIcon name="add-circle-outline"  size={58} color="white" />
          }>
           <Heading style={{color:'white',fontSize:15,marginTop:10}}> Add Account</Heading>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
  )
}

export default Toogle1

const styles = StyleSheet.create({})