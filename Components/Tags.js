import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, NativeBaseProvider,Center, Heading } from 'native-base'
import FIcon from 'react-native-vector-icons/Feather';
const Tags = () => {
  return (
<View style={{backgroundColor: 'black', flex: 1}}>
      <NativeBaseProvider>

            <Center flex={1} px="3">
            <FIcon name="user"  size={60} color="white" />
                <Heading color='white' marginTop={2}>Photos and Videos of you</Heading>
                <Heading color='grey' marginTop={2} fontSize={15} fontWeight='500'>When people tag you they'll appear here.</Heading>
            </Center>
      </NativeBaseProvider>
    </View>
  )
}

export default Tags

const styles = StyleSheet.create({})