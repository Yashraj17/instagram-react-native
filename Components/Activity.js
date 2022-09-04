import {StyleSheet, Text, View, Pressable} from 'react-native';
import {
  Heading,
  NativeBaseProvider,
  HStack,
  VStack,
  Input,
  Center,
  Box,
  Avatar,
  Spacer,
  ScrollView,
  Button,
} from 'native-base';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const Activity = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <NativeBaseProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* ////follow requests */}
        <Box w="100%" h="65" pl={4} mb={3.5} rounded="md" padding={4}>
          <HStack space={4} alignItems="center">
            <Avatar
              size="50px"
              source={{
                uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
              }}
            />
            <VStack space={0}>
              <Heading color="white" fontSize={14} fontWeight="700">
                Follow requests
              </Heading>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Approve or ignore requests
              </Text>
            </VStack>
          </HStack>
        </Box>
        {/* ////new  */}
        <VStack paddingX={5} marginTop={3} space={5}>
          <Heading fontSize={15} color="white">
            New
          </Heading>

          <Box w="100%" h="65" mb={3.5} rounded="md">
            <HStack space={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={2}>
                {/* <FIcon name="camera" style={{marginRight:15}} size={25} color="white" />
                 */}
                {/* <Box> */}
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: 'md',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  confirm
                </Box>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  borderWidth={1}
                  borderColor="white"
                  _text={{
                    fontSize: '15',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 3,
                    paddingY: 0.9,
                  }}>
                  Delete
                </Box>
              </HStack>
            </HStack>
          </Box>
        </VStack>


        {/* ////this weeks */}
        <VStack paddingX={5} marginBottom={3} >
          <Heading fontSize={15} marginBottom={3} color="white">
            This week
          </Heading>

          <VStack  mb={3.5} rounded="md">
            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={2}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: 'md',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  confirm
                </Box>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  borderWidth={1}
                  borderColor="white"
                  _text={{
                    fontSize: '15',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 3,
                    paddingY: 0.9,
                  }}>
                  Delete
                </Box>
              </HStack>
            </HStack>

            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                abc@gmail ,xyz_ <Heading fontWeight='300' fontSize={14} color='white'>and</Heading> 3 others 
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                 started following you.
                </Text>
              </VStack>
              <Spacer />
            </HStack>

            <HStack space={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={2}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: 'md',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  confirm
                </Box>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  borderWidth={1}
                  borderColor="white"
                  _text={{
                    fontSize: '15',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 3,
                    paddingY: 0.9,
                  }}>
                  Delete
                </Box>
              </HStack>
            </HStack>
            
           
          </VStack>
          
        </VStack>

         {/* ////this suggestion */}
         <VStack paddingX={5}  >
          <Heading fontSize={15} marginBottom={4} color="white">
            This week
          </Heading>

          <VStack  mb={3.5} rounded="md">

            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={5}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: '16',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  Follow
                </Box>
                <MIcon name='close' size={16} style={{top:4}} />
              </HStack>
            </HStack>
            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={5}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: '16',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  Follow
                </Box>
                <MIcon name='close' size={16} style={{top:4}} />
              </HStack>
            </HStack>
            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={5}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: '16',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  Follow
                </Box>
                <MIcon name='close' size={16} style={{top:4}} />
              </HStack>
            </HStack>
            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={5}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: '16',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  Follow
                </Box>
                <MIcon name='close' size={16} style={{top:4}} />
              </HStack>
            </HStack>
            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={5}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: '16',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  Follow
                </Box>
                <MIcon name='close' size={16} style={{top:4}} />
              </HStack>
            </HStack>
            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={5}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: '16',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  Follow
                </Box>
                <MIcon name='close' size={16} style={{top:4}} />
              </HStack>
            </HStack>
            <HStack space={4} marginBottom={4} alignItems="center">
              <Avatar
                size="50px"
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
                }}
              />
              <VStack space={0}>
                <Heading color="white" fontSize={14} fontWeight="700">
                  Follow requests
                </Heading>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Approve or
                </Text>
              </VStack>
              <Spacer />

              <HStack space={5}>
                <Box
                  alignSelf="center"
                  borderRadius={4}
                  bg="#1877f2"
                  _text={{
                    fontSize: '16',
                    fontWeight: '500',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                    paddingX: 2,
                    paddingY: 0.9,
                  }}>
                  Follow
                </Box>
                <MIcon name='close' size={16} style={{top:4}} />
              </HStack>
            </HStack>
            
           
          </VStack>
          
        </VStack>
        </ScrollView>
      </NativeBaseProvider>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({});
