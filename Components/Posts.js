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

const Example = () => {
    return (
      <Center>
        <Avatar.Group
          _avatar={{
            size: 'xs',
          }}
          max={3}>
          <Avatar
            bg="green.500"
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}>
            AJ
          </Avatar>
          <Avatar
            bg="cyan.500"
            source={{
              uri: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
            }}>
            TE
          </Avatar>
          <Avatar
            bg="cyan.500"
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}>
            TE
          </Avatar>
        </Avatar.Group>
      </Center>
    );
  };

const Posts = () => {
  return (
    <Box maxW="100%">
    <Box>
      <HStack justifyContent='space-between' padding={3}>
        <HStack space={3}>
        <Avatar
          style={{borderWidth: 2, borderColor: 'white'}}
          size={10}
          source={{
            uri: 'https://i.pinimg.com/736x/b3/a8/c1/b3a8c19938060b8a81ed1a7a85831c53.jpg',
          }}>
          AJ
        </Avatar>
          <Heading color='white' marginTop={3} fontSize={15} fontWeight='500'>Uttsav Haggu</Heading>
        </HStack>
     
        <MIcon name="dots-vertical" size={27} color="white" />
      </HStack>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
          alt="image"
        />
      </AspectRatio>
    </Box>
    <Stack p="4" space={3}>
      <Stack space={2}>
        <HStack space={4}>
          <Icon name="heart-o" size={28} color="white" />
          <MIcon
            name="message-reply-outline"
            size={28}
            color="white"
          />
          <FIcon name="send" size={28} color="white" />
          <MIcon
            name="bookmark-outline"
            style={{
              left: 220,
              flex: 1,
              justifyContent: 'space-between',
            }}
            size={32}
            color="white"
          />
        </HStack>
        <HStack space={3}>
          <Example />
          <Heading style={{fontSize: 14}} color="white">
            Liked by 45,545,430
          </Heading>
        </HStack>
      </Stack>
      <Text fontWeight="400" color="white">
        Bengaluru (also called Bangalore) is the center of India's
        high-tech industry. The city is also known for its parks and
        nightlife.
      </Text>
      <HStack
        alignItems="center"
        space={4}
        justifyContent="space-between">
        <VStack alignItems="center">
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
            fontWeight="400"
            fontSize="12">
            6 mins ago
          </Text>
        </VStack>
      </HStack>
    </Stack>
  </Box>
  )
}

export default Posts

const styles = StyleSheet.create({})

{/* <Box maxW="100%">
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <HStack space={4}>
                    <Icon name="heart-o" size={28} color="white" />
                    <MIcon
                      name="message-reply-outline"
                      size={28}
                      color="white"
                    />
                    <FIcon name="send" size={28} color="white" />
                    <MIcon
                      name="bookmark-outline"
                      style={{
                        left: 220,
                        flex: 1,
                        justifyContent: 'space-between',
                      }}
                      size={32}
                      color="white"
                    />
                  </HStack>
                  <HStack space={3}>
                    <Example />
                    <Heading style={{fontSize: 14}} color="white">
                      Liked by 45,545,430
                    </Heading>
                  </HStack>
                </Stack>
                <Text fontWeight="400" color="white">
                  Bengaluru (also called Bangalore) is the center of India's
                  high-tech industry. The city is also known for its parks and
                  nightlife.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <VStack alignItems="center">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      fontWeight="400"
                      fontSize="12">
                      6 mins ago
                    </Text>
                  </VStack>
                </HStack>
              </Stack>
            </Box>
            <Box maxW="100%">
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/Taste-The-Thrill-Of-Winter-Sports.jpg',
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <HStack space={4}>
                    <Icon name="heart-o" size={28} color="white" />
                    <MIcon
                      name="message-reply-outline"
                      size={28}
                      color="white"
                    />
                    <Icon name="send-o" size={28} color="white" />
                    <MIcon
                      name="bookmark-outline"
                      style={{
                        left: 220,
                        flex: 1,
                        justifyContent: 'space-between',
                      }}
                      size={32}
                      color="white"
                    />
                  </HStack>
                  <HStack space={3}>
                    <Example />
                    <Heading style={{fontSize: 14}} color="white">
                      Liked by 45,545,430
                    </Heading>
                  </HStack>
                </Stack>
                <Text fontWeight="400" color="white">
                  Bengaluru (also called Bangalore) is the center of India's
                  high-tech industry. The city is also known for its parks and
                  nightlife.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <VStack alignItems="center">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      fontWeight="400"
                      fontSize="12">
                      6 mins ago
                    </Text>
                  </VStack>
                </HStack>
              </Stack>
            </Box>
            <Box maxW="100%">
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: 'https://www.holidify.com/images/bgImages/MANALI.jpg',
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <HStack space={4}>
                    <Icon name="heart-o" size={28} color="white" />
                    <MIcon
                      name="message-reply-outline"
                      size={28}
                      color="white"
                    />
                    <FIcon name="send" size={28} color="white" />
                    <MIcon
                      name="bookmark-outline"
                      style={{
                        left: 220,
                        flex: 1,
                        justifyContent: 'space-between',
                      }}
                      size={32}
                      color="white"
                    />
                  </HStack>
                  <HStack space={3}>
                    <Example />
                    <Heading style={{fontSize: 14}} color="white">
                      Liked by 45,545,430
                    </Heading>
                  </HStack>
                </Stack>
                <Text fontWeight="400" color="white">
                  Bengaluru (also called Bangalore) is the center of India's
                  high-tech industry. The city is also known for its parks and
                  nightlife.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <VStack alignItems="center">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      fontWeight="400"
                      fontSize="12">
                      6 mins ago
                    </Text>
                  </VStack>
                </HStack>
              </Stack>
            </Box>
            <Box maxW="100%">
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <HStack space={4}>
                    <Icon name="heart-o" size={28} color="white" />
                    <MIcon
                      name="message-reply-outline"
                      size={28}
                      color="white"
                    />
                    <Icon name="send-o" size={28} color="white" />
                    <MIcon
                      name="bookmark-outline"
                      style={{
                        left: 220,
                        flex: 1,
                        justifyContent: 'space-between',
                      }}
                      size={32}
                      color="white"
                    />
                  </HStack>
                  <HStack space={3}>
                    <Example />
                    <Heading style={{fontSize: 14}} color="white">
                      Liked by 45,545,430
                    </Heading>
                  </HStack>
                </Stack>
                <Text fontWeight="400" color="white">
                  Bengaluru (also called Bangalore) is the center of India's
                  high-tech industry. The city is also known for its parks and
                  nightlife.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <VStack alignItems="center">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      fontWeight="400"
                      fontSize="12">
                      6 mins ago
                    </Text>
                  </VStack>
                </HStack>
              </Stack>
            </Box> */}