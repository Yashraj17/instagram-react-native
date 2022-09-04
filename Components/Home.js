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
import PublicStatusBar from './PublicStatusBar';
import Posts from './Posts';
import HomeTopNavigation from '../Screens/HomeTopNavigation';



///////////////////////////////////////

const Home = () => {
  return (
         
       <HomeTopNavigation/>  

  );
};

export default Home;

const styles = StyleSheet.create({});

  {/* <NativeBaseProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PublicStatusBar/>

          <VStack space={3} mt={3} justifyContent="center" width="100%">
            <Posts/>
          </VStack>

        </ScrollView>
      </NativeBaseProvider> */}