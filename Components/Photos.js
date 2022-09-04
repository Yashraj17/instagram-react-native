import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeBaseProvider,VStack,Input, Heading, ScrollView,Center,Flex,HStack,Image,Box,Modal,Button,Avatar } from 'native-base'
import ModelView from './ModelView';
const Photos = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [img,setImg] = React.useState('');
  const longPress = (img)=>{
    console.log('hello');
    if(showModal==false){
      setShowModal(true)
      setImg(img)
    }
  }
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <NativeBaseProvider>
      {
         (showModal)? <ModelView showModal={showModal} img={img} />: <ModelView showModal={showModal} />
       }
      <ScrollView>
      <VStack  alignItems="center">
      <HStack space={0.5} padding={0} flexWrap='wrap' >
      <Box w="33%" height={140} bg="black.300" marginBottom='0.5'  shadow={3} >
        <TouchableOpacity delayLongPress='500' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="33%" height={140} bg="black.300"  marginBottom='0.5'  shadow={3} >
        <TouchableOpacity delayLongPress='500' activeOpacity={.6} onLongPress={() => longPress("https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="33%" height={140} bg="black.300" marginBottom='0.5'  shadow={3} >
        <TouchableOpacity delayLongPress='500' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="33%" height={140} bg="black.300" marginBottom='0.5'  shadow={3} >
        <TouchableOpacity delayLongPress='500' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      
        </HStack>
        </VStack>
      </ScrollView>
      </NativeBaseProvider>
      
    </View>
  )
}

export default Photos

const styles = StyleSheet.create({})