import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, NativeBaseProvider,Center, Heading } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

const Videos = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <NativeBaseProvider>

            <Center flex={1} px="3">
                <Icon name="play-circle"  size={60} color="white" />
                <Heading color='white' marginTop={2}>Photos and Videos of you</Heading>
                <Heading color='grey' marginTop={2} fontSize={15} fontWeight='600'>Make Creative Reels for your love ones</Heading>
            </Center>
      </NativeBaseProvider>
    </View>
  )
}

export default Videos

const styles = StyleSheet.create({})