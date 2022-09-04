import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider,Image, VStack, Heading,Input,Box, Divider, ScrollView } from 'native-base'
import * as Yup from 'yup'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
    const LoginSchema = Yup.object().shape({
        email:Yup.string().email().required("Email is required"),
        password:Yup.string().required().min(6, "your password must be >= 6 length")
    })

    const userlogin = async (email,password)=>(
       auth().signInWithEmailAndPassword(email,password).then(() => {
        Alert.alert('User logged in !');
        }).catch(error => {
        if(error.code === 'auth/wrong-password')
        Alert.alert("Alert Title",error.code);
        })
    )
  return (
      <View style={{backgroundColor:'black',flex:1}}>
        <NativeBaseProvider>
            
            <VStack style={{flex:1,alignItems:'center',top:180,padding:20}}>
                 <Image source={require('../Image/logo.png')} alt='logo' style={{height:55,width:'44%'}} />
           
                    <Formik
                    initialValues={{
                        email:'',
                        password:''
                    }}
                    onSubmit={(values)=>userlogin(values.email,values.password)}
                    validationSchema={LoginSchema}
                    validateOnMount={true}
                    >
                        {
                            ({handleChange,handleBlur,values,handleSubmit,isValid,errors})=>(
                                <VStack space={4} style={{marginTop:30}}>
                                 <Input placeholder="Phone number,email or username" pl={4} color='white'
                                  fontSize='15px' w="100%" bgColor='gray.800'
                                  onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                  borderWidth={0} height={50} />  
                                        {
                                            errors.email && (
                                                <Text style={{color:'red',fontSize:10,padding:0,marginBottom:-5,marginTop:-12}}>{errors.email}</Text>
                                            )
                                        }
                                <Input placeholder="Password" pl={4} w="100%"  color='white' fontSize='15px' 
                                bgColor='gray.800' borderWidth={0} height={50}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={true}
                                /> 
                                <Pressable disabled={!isValid} onPress={handleSubmit} style={styles.button(isValid)}>
                                    <Heading color='white' fontSize={15} fontWeight='500'>Login</Heading>
                                </Pressable>    
                                </VStack>
                            )
                        }
                        
                    </Formik>
                <VStack mt={2}>
                <Heading  textAlign='center' fontSize={14} color='gray.500' fontWeight='400'>Forgot login details? 
                 <Heading color='white' textAlign='center' fontSize={14} fontWeight='600'> Get help logging in.</Heading></Heading>
                </VStack>
              
               
            </VStack>
                <VStack>
                    <Heading  textAlign='center' fontSize={14} color='gray.500' fontWeight='400'>Don't have an account? 
                    <Heading color='white' textAlign='center' fontSize={14} fontWeight='600' onPress={()=>navigation.navigate('Signup')}> Sign up.</Heading></Heading>
                </VStack>
        </NativeBaseProvider>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    button:(isValid)=>({
        alignItems:'center',
        // backgroundColor:'#0095f6',
        backgroundColor: isValid ? "#0095f6" : "#0095f64d",
        padding:10
    })
})