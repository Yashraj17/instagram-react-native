import { StyleSheet, Text, View,Button, Pressable,FlatList,Item } from 'react-native'
import React from 'react'
import { HStack, NativeBaseProvider,Avatar, VStack, Heading,Input,Box, ScrollView } from 'native-base'
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';




const Chat = ({navigation}) => {

const [input,setInput] = React.useState('');

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      status:false
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      status:true
    },

    {
      id: "58694a0f-3da1-471f-bd96",
      title: "hello world ",
      status:false
    },


  
  ];
  
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <NativeBaseProvider>
            <HStack padding={4}>
                <HStack flexGrow={10} >
                    <FIcon style={{marginTop:5}} onPress={()=>navigation.navigate('UserMessage')} name="arrow-left" size={28} color="white" />
                    <HStack marginX={5}>
                        <Avatar
                        top={1}
                            size="28px"
                            source={{
                                uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                            }}
                            />
            
                        <Pressable>
                            <VStack marginX={3} >
                                <Text style={{fontWeight:'700',fontSize:15,color:'white'}}>Yash</Text>
                                <Text style={{fontWeight:'700',fontSize:12,color:'white',fontWeight:'400',color:'gray'}}>yash_raj172000</Text>
                            </VStack>
                        </Pressable>
                    </HStack>
                </HStack>
                <HStack flexGrow={1} marginTop={2} >
                <FIcon name="phone" style={{marginRight:30}} size={24} color="white" />
                <FIcon name="video" size={25} color="white" />
                </HStack>
             </HStack>
                        
          <VStack height='84%'>
          <FlatList
              style={{paddingHorizontal:8,paddingBottom:50}}
              data={DATA.reverse()}
              renderItem={({item})=>(
                (item.status)?
                   <HStack space={2} style={{marginBottom:10,justifyContent:'flex-start'}}>
                    <Avatar
                    top={2}
                        size="28px"
                        source={{
                            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                        }}
                        />
                    <Box style={{backgroundColor:'#8a18ff',maxWidth:'50%',paddingHorizontal:16,paddingVertical:10,borderRadius:20}} >
                    <Heading  fontSize={17} fontWeight='400' color='white'>{item.title}</Heading>
                    </Box>
                    </HStack> :

                     <HStack style={{paddingBottom:32,justifyContent:'flex-end'}}>
                     <Box style={{backgroundColor:'#4844f5',paddingHorizontal:16,paddingVertical:10,maxWidth:'50%',borderRadius:20}} >
                     <Heading fontSize={17} fontWeight='400' color='white' >{item.title}</Heading>
                     </Box>
                     </HStack>

           )}
              keyExtractor={(item) => item.id}
              inverted= {-1}
            />
          </VStack>
            


             <HStack  style={{paddingHorizontal:5,paddingVertical:1,position:'absolute',bottom:0}}>
                 <Input multiline value={input} 
                 onChangeText={(text)=>setInput(text)} placeholder="Message.."
                  variant="filled" bgColor='#363636' color='white' width="100%" borderRadius="25" height='50px'borderWidth="0"
                  InputLeftElement={<Box marginLeft={2} borderRadius={50} style={{backgroundColor:'#1877f2'}} width='40px' height='40px' backgroundColor='red.100'>
                   {
                    (input !=='')? <Icon name="search" style={{alignSelf:'center',top:9}} size={20} color="white" />:
                    <Icon name="camera" style={{alignSelf:'center',top:9}} size={20} color="white" />
                   }
                    
                  </Box>}
                  InputRightElement={
                    
                    <HStack space={3} style={{marginRight:15}}>
                      {
                        (input !== '')?<Heading fontSize={20} color='#1877f2'>Send</Heading>:
                        <>
                            <FIcon name="mic" size={27} color="white" />
                            <Icon name="image" size={25} color="white" />
                            <MIcon name="sticker-emoji" size={26} color="white" />
                        </>
                      }
                  </HStack>
                }
                  
                  />
             </HStack>
        </NativeBaseProvider>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})