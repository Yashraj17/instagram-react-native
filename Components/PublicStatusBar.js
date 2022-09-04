import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  ScrollView,
  Text,
  Avatar,
  Box,
  Heading,
  AspectRatio,
  Image,
  Stack,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';

const PublicStatusBar = () => {
  return (
    <ScrollView horizontal={true} >
    <HStack
      space={6}
      // justifyContent="center"
      padding={3}
      // alignItems={{base: 'center'}}
      >
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://static-ai.asianetnews.com/images/01f99a2szvqr6tjpgpv9px204x/920fda8e0d7064bb57a87d0e3b7674fd-png.jpg',
          }}>
          AJ
          <Avatar.Badge bg="green.500" />
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
          }}>
          AJ
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://t4.ftcdn.net/jpg/02/56/19/69/360_F_256196954_lmcu4nMFri6REiLjHGeHkkjFq2ywzsVa.jpg',
          }}>
          AJ
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://i.pinimg.com/736x/b3/a8/c1/b3a8c19938060b8a81ed1a7a85831c53.jpg',
          }}>
          AJ
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}>
          AJ
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}>
          AJ
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}>
          AJ
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
      <Box alignItems="center">
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size="lg"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}>
          AJ
        </Avatar>
        <Text color="white">Yash</Text>
      </Box>
    </HStack>
  </ScrollView>
  )
}

export default PublicStatusBar

const styles = StyleSheet.create({})