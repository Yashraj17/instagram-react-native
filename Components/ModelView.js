import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Heading,HStack,Image,Box,Modal,Avatar } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';

const ModelView = ({showModal,img}) => {
  return (
    <Modal isOpen={showModal} animationPreset={'fade'}>
    <Modal.Content width='2xl' borderRadius={15}>
      <Modal.Header bgColor='gray.900' borderBottomWidth='0' >
        <HStack space={3} >
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="sm"
          source={{
            uri: img,
          }}>
          AJ
        </Avatar>
        <Heading color='white' fontSize={20}>yashraj@17</Heading>
        </HStack>
      </Modal.Header>
      <Modal.Body padding={0} borderWidth='0'>
          <Box w="100%" height={350} shadow={3} >
          {
            (img !== "") &&<Image
            style={{width:'100%',height:'100%'}}
            source={{
            uri: img
            }} alt="Alternate Text" size="xl" />
          }
          </Box> 
      </Modal.Body>
      <Modal.Footer padding={2} bgColor='gray.900' borderBottomWidth='0' borderColor='gray.900' >
            <HStack space={4} flex={1} justifyContent='space-evenly'>
            <MIcon name="cards-heart-outline"  size={30} color="white" />
            <Icon name="user-circle-o"  size={28} color="white" />
            <FIcon name="send" size={28} color="white" />
            <MIcon name="dots-vertical"  size={30} color="white" />
            </HStack>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
  )
}

export default ModelView