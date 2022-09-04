import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider,VStack,Input, Heading, ScrollView,Center,Flex,HStack,Image,Box,Modal,Button,Avatar } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

import ModelView from './ModelView';


const Settings = () => {
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
{/* /////cards  */}
     <VStack w="100%" space={5} style={{backgroundColor:'black',padding:12,marginVertical:5}} alignSelf="center">
        <Input placeholder="Search" variant="filled" bgColor='gray.800' color='white' width="100%" borderRadius="10" py="1" px="5" height='10'borderWidth="0" InputLeftElement={<Icon name="search" style={{left:10}} size={20} color="white" />}/>
      </VStack>
      <ScrollView>

      <VStack  alignItems="center">
      <HStack space={1} padding={0} flexWrap='wrap' >
        
        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>

        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>

        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>

        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>

        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
        <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
      <Image
        style={{width:'100%',height:'100%'}}
        source={{
        uri: "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
        }} alt="Alternate Text" size="xl" />
          </TouchableOpacity>
      </Box>
      <Box w="32.3%" height={140} bg="black.300" marginBottom='1'  shadow={3} >
        <TouchableOpacity delayLongPress='200' activeOpacity={.6} onLongPress={() => longPress("https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg")} onPressOut={()=>setShowModal(false)} >
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

export default Settings

const styles = StyleSheet.create({})